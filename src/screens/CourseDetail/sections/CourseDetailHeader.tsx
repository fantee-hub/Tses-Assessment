"use client";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

interface CourseDetailHeaderProps {
  title: string;
  tag: string;
  onStartLearning?: () => void;
}

export const CourseDetailHeader = ({
  title,
  tag,
  onStartLearning,
}: CourseDetailHeaderProps) => {
  const router = useRouter();

  return (
    <div className="flex md:items-center justify-between mb-6 md:flex-row flex-col ">
      <div className="flex items-start gap-3">
        <button
          onClick={() => router.back()}
          className="w-11 h-11 flex items-center justify-center rounded-full bg-[#F0F0F0] hover:bg-gray-100 transition-colors cursor-pointer shrink-0"
          aria-label="Go back"
        >
          <ArrowLeft className="text-[#636363]" />
        </button>

        <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-3">
          <h1 className="text-lg md:text-2xl font-medium text-[#202020]">
            {title}
          </h1>

          <span className="px-3 py-1 md:px-5 md:py-2 text-sm font-medium rounded-full bg-[#E1F5FE] text-[#035177] w-fit">
            {tag}
          </span>
        </div>
      </div>

      <button
        onClick={onStartLearning}
        className="md:w-57 h-12 w-full md:mt-0 mt-6 flex items-center justify-center bg-[#0063EF] text-white text-base font-medium rounded-lg hover:bg-blue-700 active:scale-95 transition-all duration-150 cursor-pointer"
      >
        Start Learning
      </button>
    </div>
  );
};
