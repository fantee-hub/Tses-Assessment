"use client";
import Image from "next/image";
import { MessageIcon, NotificationIcon, SearchIcon } from "../../custom-icons";
import { ChevronDownIcon } from "lucide-react";
import { useSelector } from "react-redux";
import { selectUser } from "@/src/state/slices/userSlice";

interface HeaderProps {
  isSideBarOpen: boolean;
  setIsSidebarOpen: (isOpen: boolean) => void;
}

export default function Header({
  isSideBarOpen,
  setIsSidebarOpen,
}: HeaderProps) {
  const user = useSelector(selectUser);

  const displayName = user?.name ?? "User";
  const displayEmail = user?.email ?? "";
  return (
    <header className="bg-white py-4 h-20 flex items-center  fixed top-0 w-full z-20 right-0 left-0 border-b border-[#f0f0f0] px-4 md:px-0">
      <div className="flex items-center justify-between gap-5 w-full">
        <div className="flex items-center md:gap-15">
          <div className="pl-4 hidden md:block">
            <Image
              src="/assets/soludesks.svg"
              alt="Logo"
              width={136}
              height={40}
            />
          </div>
          <button
            className="md:hidden block"
            onClick={() => setIsSidebarOpen(!isSideBarOpen)}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 7H21"
                stroke="#292D32"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M3 12H19"
                stroke="#292D32"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M3 17H16"
                stroke="#292D32"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
          <div className="relative w-93.25 hidden md:block">
            <span>
              <SearchIcon className="absolute right-4 top-1/2 -translate-y-1/2" />
            </span>
            <input
              type="text"
              placeholder="SearchIcon soludesk"
              className="w-full pl-5 pr-12 py-2.5 rounded-4xl border border-[#f0f0f0] bg-transparent  text-[#636363] focus-visible:ring-0 focus-visible:ring-offset-0"
            />
          </div>
        </div>

        <div className="flex items-center gap-5 md:pr-8">
          <div className="flex items-center gap-5">
            <button
              className="relative w-6 h-6 hidden md:block"
              aria-label="Messages"
            >
              <MessageIcon />
            </button>

            <button className="relative w-6 h-6" aria-label="Notifications">
              <NotificationIcon />
              <div className="absolute -top-1 -right-1 w-4 h-4 flex items-center justify-center p-0 bg-[#ff5024] hover:bg-[#ff5024] rounded-full border-0">
                <span className="font-bold text-[#fdfdfd] text-[10.2px] leading-[12.3px]">
                  4
                </span>
              </div>
            </button>
          </div>

          <div className="flex items-center md:gap-5 gap-2">
            <button className="flex items-center gap-2">
              <Image
                width={48}
                height={48}
                src="/assets/avatar.png"
                alt="Madison Greg"
                className="md:w-12 md:h-12 rounded-full object-cover w-8 h-8"
              />

              <div className="flex flex-col items-start">
                <div className="font-medium whitespace-nowrap  text-[#202020] md:text-base text-sm">
                  {displayName}
                </div>
                <div className="text-[#636363] truncate w-35 md:text-base text-sm ">
                  {displayEmail}
                </div>
              </div>
            </button>

            <button aria-label="User menu">
              <ChevronDownIcon className="w-6 h-6 text-[#636363]" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
