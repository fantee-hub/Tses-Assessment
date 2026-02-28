import { notFound } from "next/navigation";
import LearnLayout from "@/src/components/Learn/layout/LearnLayout";

import { mockCourseSections } from "@/src/data/mockData";
import CourseTabs from "@/src/screens/Learn/sections/CourseTabs";

interface LearnPageProps {
  params: Promise<{ courseId: string }>;
}

export default async function LearnPage({ params }: LearnPageProps) {
  const { courseId } = await params;

  if (!courseId) {
    notFound();
  }

  const sections = mockCourseSections;

  if (!sections || sections.length === 0) {
    return (
      <LearnLayout courseId={courseId}>
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">
            No lessons available
          </h2>
          <p className="text-gray-600 max-w-md">
            This course doesn't have any content yet or there was an issue
            loading it.
          </p>
        </div>
      </LearnLayout>
    );
  }

  const allLessons = sections.flatMap((s) => s.lessons);
  const firstLessonId = allLessons[0]?.id ?? null;

  return (
    <LearnLayout courseId={courseId}>
      <CourseTabs sections={sections} initialLessonId={firstLessonId} />
    </LearnLayout>
  );
}
