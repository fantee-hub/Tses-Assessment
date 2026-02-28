export interface Learner {
  id: string;
  name: string;
  city: string;
  email: string;
  avatar?: string;
}

export interface CourseDetailStats {
  totalApplicants: number;
  activeLearners: number;
}

export type SortField = "name" | "city" | "email";
export type SortDirection = "asc" | "desc";

export interface TableSort {
  field: SortField;
  direction: SortDirection;
}

export interface Question {
  id: string;
  text: string;
  type: "multiple_choice" | "short_answer";
  points: number;
  options?: string[];
  correctAnswer?: string;
  correctKeywords?: string[];
}

export interface Lesson {
  id: string;
  title: string;
  type: "video" | "quiz";
  content?: string;
  questions?: Question[];
}

export interface Section {
  id: string;
  title: string;
  lessons: Lesson[];
}

export type ActiveTab = "content" | "review";
