import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@/src/state/store";

interface QuizResult {
  lessonId: string;
  score: number;
  totalPoints: number;
  percentage: number;
  submittedAt: string;
  passed?: boolean;
}

interface LearnState {
  currentLessonId: string | null;
  completedLessons: string[];
  activeTab: "content" | "review";
  quizResults: QuizResult[];
}

const initialState: LearnState = {
  currentLessonId: null,
  completedLessons: [],
  activeTab: "content",
  quizResults: [],
};

const learnSlice = createSlice({
  name: "learn",
  initialState,
  reducers: {
    setCurrentLesson: (state, action: PayloadAction<string>) => {
      state.currentLessonId = action.payload;
    },
    markLessonCompleted: (state, action: PayloadAction<string>) => {
      if (!state.completedLessons.includes(action.payload)) {
        state.completedLessons.push(action.payload);
      }
    },
    setActiveTab: (state, action: PayloadAction<"content" | "review">) => {
      state.activeTab = action.payload;
    },
    saveQuizResult(
      state,
      action: PayloadAction<{
        lessonId: string;
        score: number;
        totalPoints: number;
      }>
    ) {
      const { lessonId, score, totalPoints } = action.payload;
      const percentage = Math.round((score / totalPoints) * 100);
      const passed = percentage >= 70;

      if (!state.completedLessons.includes(lessonId)) {
        state.completedLessons.push(lessonId);
      }

      state.quizResults = state.quizResults.filter(
        (r) => r.lessonId !== lessonId
      );

      state.quizResults.push({
        lessonId,
        score,
        totalPoints,
        percentage,
        submittedAt: new Date().toISOString(),
        passed,
      });

      if (passed && !state.completedLessons.includes(lessonId)) {
        state.completedLessons.push(lessonId);
      }
    },
  },
});

export const {
  setCurrentLesson,
  markLessonCompleted,
  setActiveTab,
  saveQuizResult,
} = learnSlice.actions;

export const selectCurrentLessonId = (state: RootState) =>
  state.learn.currentLessonId;
export const selectCompletedLessons = (state: RootState) =>
  state.learn.completedLessons;
export const selectActiveTab = (state: RootState) => state.learn.activeTab;
export const selectAllQuizResults = (state: RootState) =>
  state.learn.quizResults;
export const selectQuizResultByLesson =
  (lessonId: string) => (state: RootState) =>
    state.learn.quizResults.find((r) => r.lessonId === lessonId);

export default learnSlice.reducer;
