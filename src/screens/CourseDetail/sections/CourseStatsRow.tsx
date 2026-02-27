"use client";
import { ScholarIcon, UserGroupIcon } from "@/src/components/custom-icons";
import { CourseDetailStats } from "@/src/utils/types";

interface CourseStatsRowProps {
  stats: CourseDetailStats;
}

interface StatItemProps {
  label: string;
  value: number | string;
  icon: React.ReactNode;
  iconBg: string;
}

const StatItem = ({ label, value, icon, iconBg }: StatItemProps) => (
  <div className="flex items-center gap-4 bg-[#F6F7F6] rounded-sm px-6 py-5 flex-1">
    <div
      className={`w-11 h-11 rounded-lg flex items-center justify-center ${iconBg}`}
    >
      {icon}
    </div>
    <div>
      <p className="text-[#636363] font-medium mb-1">{label}</p>
      <p className="text-2xl font-medium text-[#202020]">
        {value.toLocaleString()}
      </p>
    </div>
  </div>
);

export const CourseStatsRow = ({ stats }: CourseStatsRowProps) => {
  return (
    <div className="flex gap-5">
      <div className=" gap-4 mb-6 bg-white p-1 rounded-lg w-full border border-gray-100">
        <StatItem
          label="Total Applicants"
          value={stats.totalApplicants}
          iconBg="bg-linear-to-r from-[#BEFDD9] from-0% via-[#D4FEB4] via-53% to-[#CBFAC2] to-92%"
          icon={<UserGroupIcon />}
        />
      </div>
      <div className=" gap-4 mb-6 bg-white p-1 rounded-lg w-full border border-gray-100">
        <StatItem
          label="Active Learners"
          value={stats.activeLearners}
          iconBg="bg-[linear-gradient(to_right,#CFF4FC_0%,#CFF5FC_50%,#BBF0FA_75%,#D2F6FE_100%)]"
          icon={<ScholarIcon />}
        />
      </div>
    </div>
  );
};
