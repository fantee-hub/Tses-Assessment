"use client";

import { useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";
import { mockCourseSections } from "@/src/data/mockData";
import {
  selectCompletedLessons,
  selectCurrentLessonId,
  setCurrentLesson,
} from "@/src/state/slices/learnSlice";
import { useSelector, useDispatch } from "react-redux";
import SidebarSection from "./SidebarSection";

interface MobileLessonDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileLessonDrawer({
  isOpen,
  onClose,
}: MobileLessonDrawerProps) {
  const dispatch = useDispatch();
  const currentLessonId = useSelector(selectCurrentLessonId);
  const completedLessons = useSelector(selectCompletedLessons);
  const sheetRef = useRef<HTMLDivElement>(null);

  const totalLessons = mockCourseSections.reduce(
    (sum, sec) => sum + sec.lessons.length,
    0
  );
  const completedCount = completedLessons.length;

  const handleSelectLesson = (lessonId: string) => {
    dispatch(setCurrentLesson(lessonId));
    onClose();
  };

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <div
        className={`md:hidden fixed inset-0 z-20 bg-black/40 transition-opacity duration-300 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      <div
        ref={sheetRef}
        className={`md:hidden fixed left-0 right-0 bottom-0 z-30 bg-white rounded-t-2xl shadow-2xl transition-transform duration-300 ease-out flex flex-col`}
        style={{
          maxHeight: "80dvh",
          transform: isOpen ? "translateY(0)" : "translateY(100%)",
        }}
        aria-modal="true"
        role="dialog"
        aria-label="Lessons"
      >
        <div className="flex justify-center pt-3 pb-1 shrink-0">
          <div className="w-10 h-1 rounded-full bg-gray-200" />
        </div>

        <div className="flex items-center justify-between px-5 py-3 border-b border-[#D9D9D9] shrink-0">
          <p className="text-sm font-semibold text-[#202020]">
            Lessons{" "}
            <span className="font-normal text-[#636363]">
              ({completedCount}/{totalLessons})
            </span>
          </p>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Close lessons"
          >
            <ChevronDown className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto overscroll-contain pb-6">
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
    </>
  );
}
