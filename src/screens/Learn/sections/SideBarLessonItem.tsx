import { CheckComplete, EmptyCircleIcon } from "@/src/components/custom-icons";
import { selectQuizResultByLesson } from "@/src/state/slices/learnSlice";
import { Lesson } from "@/src/utils/types";
import { Circle, CheckCircle } from "lucide-react";
import { useSelector } from "react-redux";

interface SidebarLessonItemProps {
  lesson: Lesson;
  isCurrent: boolean;
  isCompleted: boolean;
  onClick: () => void;
}

export default function SidebarLessonItem({
  lesson,
  isCurrent,
  isCompleted,
  onClick,
}: SidebarLessonItemProps) {
  const quizResult = useSelector(selectQuizResultByLesson(lesson.id));
  const getStatusIcon = () => {
    if (isCompleted) {
      return <CheckComplete className="h-5 w-5 text-blue-600 shrink-0" />;
    }
    if (isCurrent) {
      return (
        <EmptyCircleIcon className="h-6 w-6 text-[#0A60E1] fill-blue-100 shrink-0" />
      );
    }
    return <Circle className="h-6 w-6 text-gray-300 shrink-0" />;
  };

  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center justify-between gap-3 px-2 py-2.5 mb-1 rounded-xl text-left transition-colors cursor-pointer ${
        isCurrent
          ? "bg-[#EAF3FF]  text-[#0A60E1]"
          : isCompleted
          ? "bg-[#EAF3FF]  text-[#0A60E1]"
          : "hover:bg-gray-50 "
      }`}
    >
      <span
        className={`text-sm ${
          isCurrent
            ? "font-medium text-[#0A60E1]"
            : isCompleted
            ? "text-[#0A60E1]"
            : "text-[#636363]"
        }`}
      >
        {lesson.title}
      </span>

      {getStatusIcon()}
    </button>
  );
}
