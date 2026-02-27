"use client";

import { useState } from "react";
import Header from "../layout/Header";
import Sidebar from "../layout/Sidebar";

export function DashboardWrapper({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  return (
    <div>
      <Header
        isSideBarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <div>
        <Sidebar
          isSideBarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        <main className="pt-20 md:ml-51 bg-gray-50/50">{children}</main>
      </div>
    </div>
  );
}
