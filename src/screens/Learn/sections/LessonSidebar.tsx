"use client";

import { mockCourseSections } from "@/src/data/mockData";
import {
  selectCompletedLessons,
  selectCurrentLessonId,
  setCurrentLesson,
} from "@/src/state/slices/learnSlice";
import { useSelector, useDispatch } from "react-redux";
import SidebarSection from "./SidebarSection";

export default function LessonSidebar() {
  const dispatch = useDispatch();
  const currentLessonId = useSelector(selectCurrentLessonId);
  const completedLessons = useSelector(selectCompletedLessons);

  const totalLessons = mockCourseSections.reduce(
    (sum, sec) => sum + sec.lessons.length,
    0
  );
  const completedCount = completedLessons.length;

  const handleSelectLesson = (lessonId: string) => {
    dispatch(setCurrentLesson(lessonId));
  };

  return (
    <div className="flex flex-col h-auto bg-white border-[1.5px] border-[#D9D9D9] rounded-xl overflow-hidden">
      {/* Header */}
      <div className="px-5 py-2.5 border-b-[1.5px] border-[#D9D9D9]">
        <p className="text-sm font-medium text-[#636363]">
          Lessons ( {completedCount}/{totalLessons})
        </p>
      </div>

      <div className="flex-1 overflow-y-auto">
        {mockCourseSections.map((section) => (
          <SidebarSection
            key={section.id}
            section={section}
            currentLessonId={currentLessonId}
            completedLessons={completedLessons}
            onSelectLesson={handleSelectLesson}
          />
        ))}
      </div>
    </div>
  );
}
