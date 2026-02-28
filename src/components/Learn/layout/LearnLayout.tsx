"use client";

import LessonSidebar from "@/src/screens/Learn/sections/LessonSidebar";
import { useGetCourseByIdQuery } from "@/src/state/api/apiSlice";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";

interface LearnLayoutProps {
  courseId: string;
  children: ReactNode;
}

export default function LearnLayout({ children, courseId }: LearnLayoutProps) {
  const router = useRouter();

  const { data: course, isLoading: courseLoading } = useGetCourseByIdQuery(
    courseId,
    {
      skip: !courseId,
    }
  );
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
    <div className="flex h-screen bg-gray-50/70">
      <main className="flex-1 overflow-y-auto no-scrollbar p-4 md:p-6 lg:p-6">
        <div className="flex items-center gap-3 mb-5">
          <button
            onClick={() => router.back()}
            className=" w-11 h-11 flex items-center justify-center rounded-full bg-[#F0F0F0] hover:bg-gray-100 transition-colors cursor-pointer"
            aria-label="Go back"
          >
            <ArrowLeft className=" text-[#636363]   rounded-full" />
          </button>
          <h1 className="text-2xl font-medium text-[#202020]">
            {course?.title}
          </h1>
        </div>
        {children}
      </main>

      <aside className="hidden md:block md:w-80 lg:w-96 md:mt-22 no-scrollbar overflow-y-auto pr-4">
        <LessonSidebar />
      </aside>

      <div className="md:hidden fixed bottom-0 left-0 right-0 h-14 bg-white border-t z-10 flex items-center justify-center text-sm font-medium">
        Lessons (0/32) • Tap to open
      </div>
    </div>
  );
}
