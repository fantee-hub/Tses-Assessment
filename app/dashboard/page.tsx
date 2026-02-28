import CourseManagement from "@/src/screens/Courses/sections/CourseManagement";

const Dashboard = () => {
  return (
    <div className="flex-1 md:p-8 p-4  md:w-[calc(100vw-210px)] w-full text-black bg-[#f8f8f8]">
      <CourseManagement />
    </div>
  );
};

export default Dashboard;
