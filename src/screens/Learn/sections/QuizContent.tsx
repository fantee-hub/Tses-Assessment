"use client";

import { useState } from "react";
import { CheckCircle, XCircle } from "lucide-react";
import { Question } from "@/src/utils/types";
import { useDispatch } from "react-redux";
import { saveQuizResult } from "@/src/state/slices/learnSlice";
import { AwardIcon, GreenCheck } from "@/src/components/custom-icons";

interface QuizContentProps {
  questions: Question[];
  lessonId: string;
  onSubmit?: (score: number, totalPoints: number) => void;
}

type UserAnswers = Record<string, string>;

export default function QuizContent({
  questions,
  onSubmit,
  lessonId,
}: QuizContentProps) {
  const [answers, setAnswers] = useState<UserAnswers>({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [showDetails, setShowDetails] = useState(false);
  const dispatch = useDispatch();

  const totalPoints = questions.reduce((sum, q) => sum + q.points, 0);

  const handleChoiceChange = (questionId: string, value: string) => {
    if (submitted) return;
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  };

  const handleTextChange = (questionId: string, value: string) => {
    if (submitted) return;
    setAnswers((prev) => ({ ...prev, [questionId]: value.trim() }));
  };

  const calculateScore = () => {
    let earned = 0;

    questions.forEach((q) => {
      const userAnswer = answers[q.id];

      if (!userAnswer) return;

      if (q.type === "multiple_choice" && q.correctAnswer) {
        if (userAnswer === q.correctAnswer) {
          earned += q.points;
        }
      } else if (q.type === "short_answer" && q.correctKeywords) {
        const lowerAnswer = userAnswer.toLowerCase();
        const matched = q.correctKeywords.some((kw) =>
          lowerAnswer.includes(kw.toLowerCase())
        );
        if (matched) {
          earned += q.points;
        }
      }
    });

    return earned;
  };

  const handleSubmit = () => {
    const finalScore = calculateScore();
    setScore(finalScore);
    setSubmitted(true);

    dispatch(
      saveQuizResult({
        lessonId,
        score: finalScore,
        totalPoints,
      })
    );

    if (onSubmit) onSubmit(finalScore, totalPoints);
  };

  const handleRetake = () => {
    setAnswers({});
    setSubmitted(false);
    setScore(0);
    setShowDetails(false);
  };

  const getQuestionFeedback = (q: Question) => {
    if (!submitted) return null;

    const userAns = answers[q.id];
    let isCorrect = false;

    if (q.type === "multiple_choice" && q.correctAnswer) {
      isCorrect = userAns === q.correctAnswer;
    } else if (q.type === "short_answer" && q.correctKeywords) {
      const lower = (userAns || "").toLowerCase();
      isCorrect = q.correctKeywords.some((kw) =>
        lower.includes(kw.toLowerCase())
      );
    }

    return (
      <div
        className={`mt-3 text-sm ${
          isCorrect ? "text-green-700" : "text-red-700"
        }`}
      >
        {isCorrect ? (
          <span className="flex items-center gap-1.5">
            <GreenCheck className="h-4 w-4" /> Correct!
          </span>
        ) : (
          <span className="flex items-center gap-1.5">
            <XCircle className="h-4 w-4" /> Incorrect
          </span>
        )}
      </div>
    );
  };

  return (
    <div className="">
      <div className="p-5 border-b-[1.5px] text-sm border-[#D9D9D9]">
        <h2 className="font-semibold text-[#202020]">Quiz</h2>
      </div>
      {questions.map((question, index) => (
        <div key={question.id} className=" pt-5 px-5">
          <div className="flex items-start gap-4 border border-[#E8E8E8] rounded-[14px] p-3">
            <div className="shrink-0 w-8 h-8 rounded-[10px] bg-[#0A60E1] text-white font-semibold flex items-center justify-center text-lg">
              {index + 1}
            </div>
            <div className="flex-1">
              <h3 className="text-sm font-medium text-[#202020] mb-2">
                {question.text}
              </h3>

              <div className="flex items-center gap-2 mb-4">
                <span className="flex items-center px-2 py-0.5 rounded-lg text-xs font-medium border border-[#E8E8E8]">
                  {question.type === "multiple_choice"
                    ? "Multiple Choice"
                    : "Short Answer"}
                </span>
                <span className="flex items-center text-xs text-[#636363] gap-1">
                  <AwardIcon />
                  {question.points} points
                </span>
              </div>

              {question.type === "multiple_choice" && question.options ? (
                <div className="space-y-3">
                  {question.options.map((opt, i) => {
                    const letter = String.fromCharCode(65 + i);
                    const isSelected = answers[question.id] === letter;
                    return (
                      <label
                        key={letter}
                        className={`flex items-center gap-3 p-2.25 rounded-[10px] border border-[#E8E8E8]  cursor-pointer transition-colors ${
                          submitted
                            ? isSelected
                              ? "bg-[#EAF3FF]"
                              : "opacity-70 hover:bg-blue-50"
                            : ""
                        } ${
                          isSelected
                            ? "bg-[#EAF3FF] text-[#0A60E1] hover:bg-[#EAF3FF]"
                            : "bg-[#FDFDFD] hover:bg-gray-50"
                        }`}
                      >
                        <input
                          type="radio"
                          name={question.id}
                          value={letter}
                          checked={isSelected}
                          onChange={() =>
                            handleChoiceChange(question.id, letter)
                          }
                          disabled={submitted}
                          className="h-5 w-5 text-blue-600 hidden"
                        />
                        <span className="text-[#636363] text-xs">
                          {letter}. {opt}
                        </span>
                      </label>
                    );
                  })}
                </div>
              ) : (
                <textarea
                  value={answers[question.id] || ""}
                  onChange={(e) =>
                    handleTextChange(question.id, e.target.value)
                  }
                  disabled={submitted}
                  placeholder="Enter your answer here..."
                  className="w-full h-19 p-4 border border-[#E8E8E8] rounded-[10px] text-sm resize-none disabled:bg-gray-50 disabled:opacity-70"
                />
              )}

              {submitted && getQuestionFeedback(question)}
            </div>
          </div>
        </div>
      ))}

      <div className="pt-15 flex justify-end px-5 pb-5">
        {!submitted ? (
          <button
            onClick={handleSubmit}
            disabled={Object.keys(answers).length === 0}
            className="w-57 h-12 flex items-center justify-center  cursor-pointer
                     bg-white border border-[#0063EF] 
                     text-[#0063EF] font-medium rounded-lg 
                     hover:bg-[#0063EF] hover:text-white
                     disabled:bg-gray-50 disabled:text-gray-400 disabled:border-gray-300
                     disabled:cursor-not-allowed
                     transition-colors"
          >
            Submit Quiz
          </button>
        ) : (
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-2">
                Your Score: {score} / {totalPoints}
              </h3>
              <p className="text-lg text-gray-600">
                {Math.round((score / totalPoints) * 100)}% —{" "}
                {score === totalPoints ? "Perfect!" : "Good effort!"}
              </p>
            </div>

            <div className="flex justify-center gap-4">
              <button
                onClick={handleRetake}
                className="w-40 h-12 flex items-center justify-center border border-[#0063EF] bg-white text-[#0063EF] cursor-pointer rounded-lg hover:bg-[#0063EF] hover:text-white transition-colors"
              >
                Retake Quiz
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
