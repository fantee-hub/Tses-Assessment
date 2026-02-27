import CourseManagement from "@/src/screens/Courses/sections/CourseManagement";
import React from "react";

const Dashboard = () => {
  return (
    <div className="flex-1 md:p-8 p-6 md:ml-51 md:w-[calc(100vw-210px)] w-full text-black md:mt-20 mt-20 bg-[#f8f8f8]">
      <CourseManagement />
    </div>
  );
};

export default Dashboard;
