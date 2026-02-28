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

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role?: string;
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
  baseQuery: fetchBaseQuery({
    baseUrl: "/api",
    prepareHeaders: (headers) => {
      const token =
        typeof window !== "undefined" ? localStorage.getItem("token") : null;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["Profile", "Course"],
  endpoints: (builder) => ({
    getProfile: builder.query<UserProfile, void>({
      query: () => "users/profile",
      providesTags: ["Profile"],
    }),
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
