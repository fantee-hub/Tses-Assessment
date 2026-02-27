"use client";
import { Course, useGetCoursesQuery } from "@/src/state/api/apiSlice";
import HeaderSection from "./HeaderSection";
import { StatCard } from "./StatCard";
import { CourseCard } from "./CourseCard";
import {
  CoursesIcon,
  ScholarIcon,
  TaskIcon,
} from "@/src/components/custom-icons";

import FilterSection from "./FilterSection";
import Pagination from "@/src/components/custom-pagination/Pagination";
import { useMemo, useState } from "react";

const CourseManagement = () => {
  const { data: courses, isLoading } = useGetCoursesQuery();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(10);

  //filter states
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedDateRange, setSelectedDateRange] = useState<string>("all");

  const categories = useMemo(() => {
    if (!courses) return [];
    const uniqueCategories = Array.from(
      new Set(courses.map((course: Course) => course.tag))
    ).filter(Boolean);
    return uniqueCategories as string[];
  }, [courses]);

  const filteredCourses = useMemo(() => {
    if (!courses) return [];

    let filtered = [...courses];

    if (searchQuery) {
      filtered = filtered.filter((course: Course) =>
        course.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (selectedCategory) {
      filtered = filtered.filter(
        (course: Course) => course.tag === selectedCategory
      );
    }
    return filtered;
  }, [courses, searchQuery, selectedCategory, selectedDateRange]);

  const paginatedCourses = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredCourses.slice(startIndex, endIndex);
  }, [filteredCourses, currentPage, itemsPerPage]);

  const totalItems = courses ? courses.length : 0;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleItemsPerPageChange = (count: number) => {
    setItemsPerPage(count);
    setCurrentPage(1);
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handleDateRangeChange = (range: string) => {
    setSelectedDateRange(range);
    setCurrentPage(1);
  };

  return (
    <div className="flex-1  w-full text-black  ">
      <HeaderSection />

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <StatCard
          title="Total courses"
          value="123"
          icon={CoursesIcon}
          gradient="bg-[linear-gradient(177deg,rgba(243,241,252,1)_0%,rgba(251,238,254,1)_36%,rgba(236,226,254,1)_75%,rgba(220,213,253,1)_100%)]"
        />
        <StatCard
          title="Total Enrollments"
          value="11"
          icon={ScholarIcon}
          gradient="bg-[linear-gradient(180deg,rgba(207,244,252,1)_0%,rgba(207,245,252,1)_50%,rgba(187,240,250,1)_75%,rgba(210,246,254,1)_100%)]"
        />
        <StatCard
          title="Avg Completion"
          value="99%"
          icon={TaskIcon}
          trend="12%"
          gradient="bg-[linear-gradient(177deg,rgba(243,201,165,1)_0%,rgba(248,223,201,1)_36%,rgba(249,225,205,1)_75%,rgba(251,228,208,1)_100%)]"
        />
      </div>

      <div className="bg-white p-5 rounded-xl border border-[#FDFDFD]  ">
        {/* Search & Filter */}
        <FilterSection
          searchQuery={searchQuery}
          onSearchChange={handleSearchChange}
          selectedCategory={selectedCategory}
          onCategoryChange={handleCategoryChange}
          categories={categories}
          selectedDateRange={selectedDateRange}
          onDateRangeChange={handleDateRangeChange}
        />

        {/* Course Grid */}
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-pulse">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-64 bg-gray-200 rounded-xl" />
            ))}
          </div>
        ) : paginatedCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {paginatedCourses.map((course: Course) => (
              <CourseCard key={course.id} {...course} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No courses found</p>
            <p className="text-gray-400 text-sm mt-2">
              Try adjusting your filters or search query
            </p>
          </div>
        )}
      </div>

      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        itemsPerPage={itemsPerPage}
        onPageChange={handlePageChange}
        onItemsPerPageChange={handleItemsPerPageChange}
      />
    </div>
  );
};

export default CourseManagement;
