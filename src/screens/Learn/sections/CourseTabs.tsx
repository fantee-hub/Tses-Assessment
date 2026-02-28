"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  markLessonCompleted,
  selectActiveTab,
  selectCompletedLessons,
  selectCurrentLessonId,
  setActiveTab,
  setCurrentLesson,
} from "@/src/state/slices/learnSlice";
import { Section } from "@/src/utils/types";
import QuizContent from "./QuizContent";
import { PlayIcon } from "@/src/components/custom-icons";

interface CourseTabsProps {
  sections: Section[];
  initialLessonId?: string | null;
}

export default function CourseTabs({
  sections,
  initialLessonId,
}: CourseTabsProps) {
  const dispatch = useDispatch();
  const currentLessonId = useSelector(selectCurrentLessonId);
  const completedLessons = useSelector(selectCompletedLessons);
  const activeTab = useSelector(selectActiveTab);
  const lessonId = currentLessonId?.slice(1);

  useEffect(() => {
    if (!currentLessonId && initialLessonId) {
      dispatch(setCurrentLesson(initialLessonId));
    }
  }, [dispatch, currentLessonId, initialLessonId]);

  const allLessons = sections.flatMap((s) => s.lessons);
  const currentLesson = allLessons.find((l) => l.id === currentLessonId);

  const handleMarkComplete = () => {
    if (currentLessonId) {
      dispatch(markLessonCompleted(currentLessonId));

      const currentIndex = allLessons.findIndex(
        (l) => l.id === currentLessonId
      );
      const nextLesson = allLessons[currentIndex + 1];
      if (nextLesson) {
        dispatch(setCurrentLesson(nextLesson.id));
      }
    }
  };

  const setTab = (tab: "content" | "review") => {
    dispatch(setActiveTab(tab));
  };

  if (!currentLesson) {
    return (
      <div className="bg-white p-12 rounded-xl text-center text-gray-500 min-h-[50vh] flex items-center justify-center">
        Select a lesson from the sidebar to begin
      </div>
    );
  }

  const isVideoLesson = currentLesson.type === "video";
  const isQuizLesson = currentLesson.type === "quiz";

  return (
    <div className="space-y-6 pb-20">
      {isVideoLesson && (
        <div className="bg-black rounded-xl overflow-hidden aspect-video relative">
          <img
            src={"/assets/video-thumnail.png"}
            alt={currentLesson.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="
      w-14 h-14 
      rounded-full 
      bg-black/50              
      backdrop-blur-sm        
      flex items-center justify-center
      transition-all duration-300
      group-hover:bg-black/65  
      group-hover:scale-110     
     
    "
            >
              <PlayIcon />
            </div>
          </div>
        </div>
      )}

      <div className="flex border-b border-gray-200">
        <button
          onClick={() => setTab("content")}
          className={`px-5 py-3 md:px-6  text-sm md:text-base border-b-2 transition-colors cursor-pointer ${
            activeTab === "content"
              ? "border-[#0A60E1] text-[#0A60E1] font-semibold"
              : "border-transparent text-[#636363] hover:text-gray-700 hover:border-gray-300"
          }`}
        >
          Course Content
        </button>
        <button
          onClick={() => setTab("review")}
          className={`px-5 py-3 md:px-6  text-sm md:text-base border-b-2 transition-colors cursor-pointer ${
            activeTab === "review"
              ? "border-[#0A60E1] text-[#0A60E1] font-semibold"
              : "border-transparent text-[#636363] hover:text-gray-700 hover:border-gray-300"
          }`}
        >
          Review / Feedbacks
        </button>
      </div>

      <div className="bg-white rounded-lg border-[1.5px] border-[#D9D9D9] p-5">
        {activeTab === "review" ? (
          <div className="text-center py-12 text-gray-500">
            Feedback & reviews coming soon...
            <p className="mt-3 text-sm">
              Rate this lesson or leave comments after completing it.
            </p>
          </div>
        ) : (
          <>
            {isVideoLesson && currentLesson.content && (
              <>
                <div className="p-5 border-b-[1.5px] border-[#D9D9D9]">
                  <h2 className="text-sm  font-semibold text-[#202020]">
                    Lesson {lessonId} - {currentLesson.title}
                  </h2>
                </div>

                <div
                  className="prose prose-blue max-w-none mb-10 p-5 text-sm text-[#636363]"
                  dangerouslySetInnerHTML={{ __html: currentLesson.content }}
                />
              </>
            )}

            {isQuizLesson && (
              <div className="space-y-10">
                <QuizContent
                  questions={currentLesson.questions || []}
                  lessonId={currentLesson.id}
                />
              </div>
            )}

            {!isQuizLesson && (
              <div className="flex justify-end p-5">
                <button
                  onClick={handleMarkComplete}
                  className="w-57 h-12 flex items-center justify-center bg-white border border-[#0063EF] cursor-pointer text-[#0063EF] font-medium rounded-lg hover:bg-blue-700 hover:text-white transition-colors"
                >
                  Mark as Complete
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
