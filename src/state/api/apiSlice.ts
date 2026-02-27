import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface Course {
  id: string;
  title: string;
  description: string;
  tag: string;
  image: string;
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
  }),
});

export const { useGetCoursesQuery } = apiSlice;
