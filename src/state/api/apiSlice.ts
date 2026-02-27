import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface Course {
  id: string;
  title: string;
  description: string;
  tag: string;
  image: string;
  thumbnail?: string;
  totalApplicants?: number;
  activeLearners?: number;
  duration?: string;
  instructor?: string;
}

export interface Learner {
  id: string;
  name: string;
  city: string;
  email: string;
  avatar?: string;
}

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
  endpoints: (builder) => ({
    getCourses: builder.query<Course[], void>({
      query: () => "courses",
    }),
    getCourseById: builder.query<Course, string>({
      query: (id) => `courses/${id}`,
    }),
    getCourseLearnersByCourseId: builder.query<Learner[], string>({
      query: (id) => `/courses/${id}/learners`,
    }),
  }),
});

export const {
  useGetCoursesQuery,
  useGetCourseByIdQuery,
  useGetCourseLearnersByCourseIdQuery,
} = apiSlice;
