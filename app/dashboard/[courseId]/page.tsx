"use client";
import { useMemo } from "react";
import { useParams, useRouter } from "next/navigation";

import {
  useGetCourseByIdQuery,
  useGetCourseLearnersByCourseIdQuery,
} from "@/src/state/api/apiSlice";
import { CourseDetailHeader } from "@/src/screens/CourseDetail/sections/CourseDetailHeader";
import { CourseHeroBanner } from "@/src/screens/CourseDetail/sections/CourseHeroBanner";
import { CourseStatsRow } from "@/src/screens/CourseDetail/sections/CourseStatsRow";
import { Learner } from "@/src/utils/types";
import { LearnersTable } from "@/src/screens/CourseDetail/sections/LearnersTable";

const CourseDetailPage = () => {
  const params = useParams();
  const courseId = params?.courseId as string;
  const router = useRouter();

  const { data: course, isLoading: courseLoading } = useGetCourseByIdQuery(
    courseId,
    {
      skip: !courseId,
    }
  );

  const { data: learners = [], isLoading: learnersLoading } =
    useGetCourseLearnersByCourseIdQuery(courseId, { skip: !courseId });

  const stats = useMemo(
    () => ({
      totalApplicants: course?.totalApplicants ?? 0,
      activeLearners: course?.activeLearners ?? 0,
    }),
    [course]
  );

  const handleMessageLearner = (learner: Learner) => {};

  if (courseLoading) {
    return (
      <div className="flex-1 w-full bg-gray-50/50 p-6 animate-pulse space-y-4">
        <div className="h-8 bg-gray-200 rounded w-1/3" />
        <div className="h-56 bg-gray-200 rounded-xl" />
        <div className="flex gap-4">
          <div className="h-24 bg-gray-200 rounded-xl flex-1" />
          <div className="h-24 bg-gray-200 rounded-xl flex-1" />
        </div>
        {[...Array(5)].map((_, i) => (
          <div key={i} className="h-12 bg-gray-200 rounded" />
        ))}
      </div>
    );
  }

  if (!course) {
    return (
      <div className="flex-1 w-full bg-gray-50/50 p-6 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-500 text-lg font-medium">Course not found</p>
          <p className="text-gray-400 text-sm mt-1">
            The course you&apos;re looking for doesn&apos;t exist or has been
            removed.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 w-full bg-gray-50/50 p-6">
      <CourseDetailHeader
        title={course.title}
        tag={course.tag}
        onStartLearning={() => {
          router.push(`/dashboard/${course.id}/learn`);
        }}
      />

      {/* Hero banner */}
      <CourseHeroBanner thumbnail={course.image} title={course.title} />

      {/* Stats */}
      <CourseStatsRow stats={stats} />

      {/* Learners table */}
      {learnersLoading ? (
        <div className="animate-pulse space-y-2">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="h-12 bg-gray-200 rounded" />
          ))}
        </div>
      ) : (
        <LearnersTable
          learners={learners}
          onMessageLearner={handleMessageLearner}
        />
      )}
    </div>
  );
};

export default CourseDetailPage;
