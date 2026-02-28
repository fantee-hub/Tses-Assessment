"use client";
import { CalendarIcon, SearchIcon } from "@/src/components/custom-icons";
import { ChevronDownIcon } from "lucide-react";
import { useState, useRef, useEffect } from "react";

interface FilterSectionProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  categories: string[];
  selectedDateRange: string;
  onDateRangeChange: (range: string) => void;
}

const FilterSection: React.FC<FilterSectionProps> = ({
  searchQuery,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  categories,
  selectedDateRange,
  onDateRangeChange,
}) => {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isDateOpen, setIsDateOpen] = useState(false);
  const categoryRef = useRef<HTMLDivElement>(null);
  const dateRef = useRef<HTMLDivElement>(null);

  const dateRanges = [
    { label: "All Time", value: "all" },
    { label: "Last 7 Days", value: "7days" },
    { label: "Last 30 Days", value: "30days" },
    { label: "Last 3 Months", value: "3months" },
    { label: "Last 6 Months", value: "6months" },
    { label: "Last Year", value: "1year" },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        categoryRef.current &&
        !categoryRef.current.contains(event.target as Node)
      ) {
        setIsCategoryOpen(false);
      }
      if (dateRef.current && !dateRef.current.contains(event.target as Node)) {
        setIsDateOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleCategorySelect = (category: string) => {
    onCategoryChange(category);
    setIsCategoryOpen(false);
  };

  const handleDateSelect = (range: string) => {
    onDateRangeChange(range);
    setIsDateOpen(false);
  };

  const getDateLabel = () => {
    const selected = dateRanges.find(
      (range) => range.value === selectedDateRange
    );
    return selected ? selected.label : "Date";
  };

  return (
    <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8">
      {/* Search Input */}
      <div className="relative w-full md:w-170.25">
        <input
          type="text"
          placeholder="Search Course"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full pr-10 pl-4 py-2.5 rounded-4xl border border-[#F0F0F0] text-[#636363] focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <span className="absolute right-8 top-1/2 -translate-y-1/2">
          <SearchIcon />
        </span>
      </div>

      {/* Filter Buttons */}
      <div className="flex gap-2 w-full md:w-auto">
        <div className="relative" ref={dateRef}>
          <button
            onClick={() => setIsDateOpen(!isDateOpen)}
            className="px-4 py-2 border border-[#E8E8E8] rounded-full text-sm text-[#636363] flex items-center gap-2 hover:border-gray-300 transition-colors"
          >
            {getDateLabel()}
            <span className={`transition-transform duration-200 }`}>
              <CalendarIcon />
            </span>
          </button>

          <div
            className={`absolute right-0 top-full mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-10 overflow-hidden transition-all duration-200 origin-top md:min-w-40 ${
              isDateOpen
                ? "opacity-100 scale-y-100 visible"
                : "opacity-0 scale-y-0 invisible"
            }`}
          >
            {dateRanges.map((range) => (
              <button
                key={range.value}
                onClick={() => handleDateSelect(range.value)}
                className={`block w-full text-left px-4 py-2 hover:bg-gray-50 transition-colors md:text-sm text-xs ${
                  selectedDateRange === range.value
                    ? "bg-blue-50 text-blue-600 font-medium"
                    : "text-[#636363]"
                }`}
              >
                {range.label}
              </button>
            ))}
          </div>
        </div>

        {/* Category Filter */}
        <div className="relative" ref={categoryRef}>
          <button
            onClick={() => setIsCategoryOpen(!isCategoryOpen)}
            className="px-4 py-2 border border-[#E8E8E8] rounded-full text-sm text-[#636363] flex items-center gap-2 hover:border-gray-300 transition-colors"
          >
            {selectedCategory || "Category"}
            <span
              className={`transition-transform duration-200 ${
                isCategoryOpen ? "rotate-180" : ""
              }`}
            >
              <ChevronDownIcon size={16} />
            </span>
          </button>

          <div
            className={`absolute right-0 top-full mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-10 overflow-hidden transition-all duration-200 origin-top min-w-40 ${
              isCategoryOpen
                ? "opacity-100 scale-y-100 visible"
                : "opacity-0 scale-y-0 invisible"
            }`}
          >
            <button
              onClick={() => handleCategorySelect("")}
              className={`block w-full text-left px-4 py-2 hover:bg-gray-50 transition-colors md:text-sm text-xs ${
                selectedCategory === ""
                  ? "bg-blue-50 text-blue-600 font-medium"
                  : "text-[#636363]"
              }`}
            >
              All Categories
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategorySelect(category)}
                className={`block w-full text-left px-4 py-2 hover:bg-gray-50 transition-colors md:text-sm text-xs ${
                  selectedCategory === category
                    ? "bg-blue-50 text-blue-600 font-medium"
                    : "text-[#636363]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterSection;
