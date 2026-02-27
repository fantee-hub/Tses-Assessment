import { AutoConversionIcon } from "@/src/components/custom-icons";
import React from "react";

interface StatCardProps {
  title: string;
  value: string | number;
  icon: React.ElementType;
  trend?: string;
  gradient: string;
}

export const StatCard = ({
  title,
  value,
  icon,
  trend,
  gradient,
}: StatCardProps) => {
  const IconComponent = icon;
  return (
    <div className="bg-white rounded-lg border border-gray-100 flex items-center gap-4 flex-1 p-1">
      <div className="bg-[#F6F7F6] rounded-sm w-full flex items-center p-3 gap-3">
        <div
          className={`w-12 h-12 ${gradient} rounded-lg flex items-center justify-center`}
        >
          <IconComponent />
        </div>
        <div className="flex-1">
          <p className="text-[#636363] font-medium mb-1">{title}</p>
          <div className="flex items-end justify-between">
            <h3 className="text-2xl font-medium text-[#202020]">{value}</h3>
            {trend && (
              <span className="text-[10px] text-[#00B000] flex items-center mb-1">
                <AutoConversionIcon /> {trend}{" "}
                <span className="text-[#00B000] font-normal ml-1">
                  up from last month
                </span>
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
