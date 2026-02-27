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
    <div className="flex items-center justify-between mb-6 ">
      <div className="flex items-center gap-3">
        <button
          onClick={() => router.back()}
          className=" w-11 h-11 flex items-center justify-center rounded-full bg-[#F0F0F0] hover:bg-gray-100 transition-colors cursor-pointer"
          aria-label="Go back"
        >
          <ArrowLeft className=" text-[#636363]   rounded-full" />
        </button>
        <h1 className="text-2xl font-medium text-[#202020]">{title}</h1>
        <span className="px-5 py-2 text-sm font-medium rounded-full bg-[#E1F5FE] text-[#035177]">
          {tag}
        </span>
      </div>

      <button
        onClick={onStartLearning}
        className="w-57 h-12 flex items-center justify-center bg-[#0063EF] text-white text-base font-medium rounded-lg hover:bg-blue-700 active:scale-95 transition-all duration-150 cursor-pointer"
      >
        Start Learning
      </button>
    </div>
  );
};
