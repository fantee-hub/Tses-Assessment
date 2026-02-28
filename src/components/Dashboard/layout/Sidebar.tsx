"use client";

import Link from "next/link";
import Image from "next/image";
import {
  AssessmentIcon,
  CertificationIcon,
  ClassesIcon,
  CoursesIcon,
  DashboardIcon,
  SettingsIcon,
} from "../../custom-icons";

const sidebarItems = [
  { icon: DashboardIcon, label: "Dashboard", active: false },
  { icon: CoursesIcon, label: "Courses/Materials", active: true },
  { icon: ClassesIcon, label: "Classes", active: false },
  { icon: AssessmentIcon, label: "Assessments", active: false },
  { icon: CertificationIcon, label: "Certifications", active: false },
  { icon: SettingsIcon, label: "Settings", active: false },
];

interface SidebarItem {
  isSideBarOpen: boolean;
  setIsSidebarOpen: (isOpen: boolean) => void;
}

export default function Sidebar({
  isSideBarOpen,
  setIsSidebarOpen,
}: SidebarItem) {
  const handleOverlayClick = () => {
    setIsSidebarOpen(true);
  };

  return (
    <>
      {!isSideBarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-5 transition-opacity duration-300 md:hidden"
          onClick={handleOverlayClick}
        />
      )}

      <aside
        className={`w-52.5 bg-white h-screen min-h-screen overflow-y-auto md:pt-28 pt-24 z-10 fixed top-0 md:translate-x-0 transition-all border-r border-[#f0f0f0] px-4  ${
          isSideBarOpen ? "-translate-x-full" : " translate-x-0"
        }`}
      >
        <div className="md:hidden block">
          <div className="logo">
            <Image
              src="/assets/soludesks.svg"
              alt="Logo"
              width={136}
              height={40}
            />
          </div>
        </div>

        <nav className="overflow-hidden min-w-full mx-0 mt-4 md:mt-0">
          {sidebarItems.map((section, index) => (
            <div key={index} className="mb-5">
              <Link
                href="#"
                className={`flex items-center gap-2 text-sm  pl-2 py-2  ${
                  section.active
                    ? "bg-[#EAF3FF] text-[#0A60E1] font-semibold border-l-[1.5px] border-[#0A60E1]"
                    : "text-[#636363] font-normal"
                }`}
              >
                <section.icon
                  className="opacity-100"
                  stroke={`${section.active ? "#0A60E1" : "#636363"}`}
                />
                {section.label}
              </Link>
            </div>
          ))}
        </nav>
      </aside>
    </>
  );
}
