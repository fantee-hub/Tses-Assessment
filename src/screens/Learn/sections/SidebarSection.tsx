"use client";

import { useState } from "react";
import {
  CheckCircle,
  ChevronDown,
  ChevronRight,
  ChevronUp,
} from "lucide-react";

import { Section } from "@/src/utils/types";
import SidebarLessonItem from "./SideBarLessonItem";
import { GreenCheck } from "@/src/components/custom-icons";

interface SidebarSectionProps {
  section: Section;
  currentLessonId: string | null;
  completedLessons: string[];
  onSelectLesson: (lessonId: string) => void;
}

export default function SidebarSection({
  section,
  currentLessonId,
  completedLessons,
  onSelectLesson,
}: SidebarSectionProps) {
  const [isOpen, setIsOpen] = useState(true);

  const isSectionCompleted =
    section.lessons.length > 0 &&
    section.lessons.every((lesson) => completedLessons.includes(lesson.id));

  const toggleOpen = () => setIsOpen((prev) => !prev);

  return (
    <div className="">
      <button
        onClick={toggleOpen}
        className="w-full flex items-center justify-between px-5 py-4 gap-2 text-left hover:bg-gray-50 transition-colors cursor-pointer"
      >
        <div className="flex items-center justify-between w-full gap-2.5">
          <span className="font-semibold text-[#202020]">{section.title}</span>

          {isSectionCompleted && <GreenCheck aria-label="Section completed" />}
        </div>

        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-gray-500" />
        ) : (
          <ChevronDown className="h-5 w-5 text-gray-500" />
        )}
      </button>

      {isOpen && (
        <div className="pb-2 px-3">
          {section.lessons.map((lesson) => (
            <SidebarLessonItem
              key={lesson.id}
              lesson={lesson}
              isCurrent={lesson.id === currentLessonId}
              isCompleted={completedLessons.includes(lesson.id)}
              onClick={() => onSelectLesson(lesson.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
