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
