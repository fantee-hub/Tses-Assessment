"use client";
import { useState, useMemo } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

import Pagination from "@/src/components/custom-pagination/Pagination";
import { Learner, SortField, TableSort } from "@/src/utils/types";
import { MessageTextIcon } from "@/src/components/custom-icons";
import { LearnersCardList } from "./LearnersCardList";

interface LearnersTableProps {
  learners: Learner[];
  onMessageLearner?: (learner: Learner) => void;
}

interface AvatarProps {
  src?: string;
  name: string;
}

const Avatar = ({ src, name }: AvatarProps) => {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  if (src) {
    return (
      <img src={src} alt={name} className="w-8 h-8 rounded-full object-cover" />
    );
  }

  return (
    <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-xs font-semibold">
      {initials}
    </div>
  );
};

interface SortIconProps {
  field: SortField;
  sort: TableSort;
}

const SortIcon = ({ field, sort }: SortIconProps) => {
  if (sort.field !== field) {
    return <ChevronDown className="w-3 h-3 text-gray-300" />;
  }
  return sort.direction === "asc" ? (
    <ChevronUp className="w-3 h-3 text-blue-500" />
  ) : (
    <ChevronDown className="w-3 h-3 text-blue-500" />
  );
};

export const LearnersTable = ({
  learners,
  onMessageLearner,
}: LearnersTableProps) => {
  const [sort, setSort] = useState<TableSort>({
    field: "name",
    direction: "asc",
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const handleSort = (field: SortField) => {
    setSort((prev) =>
      prev.field === field
        ? { field, direction: prev.direction === "asc" ? "desc" : "asc" }
        : { field, direction: "asc" }
    );
    setCurrentPage(1);
  };

  const sortedLearners = useMemo(() => {
    return [...learners].sort((a, b) => {
      const aVal = a[sort.field] ?? "";
      const bVal = b[sort.field] ?? "";
      const cmp = aVal.localeCompare(bVal);
      return sort.direction === "asc" ? cmp : -cmp;
    });
  }, [learners, sort]);

  const totalPages = Math.ceil(sortedLearners.length / itemsPerPage);

  const paginatedLearners = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return sortedLearners.slice(start, start + itemsPerPage);
  }, [sortedLearners, currentPage, itemsPerPage]);

  const columns: { label: string; field: SortField }[] = [
    { label: "Name", field: "name" },
    { label: "City", field: "city" },
    { label: "Email Address", field: "email" },
  ];

  return (
    <div className="bg-white rounded-xl border border-gray-100">
      <div className="md:hidden">
        <LearnersCardList
          learners={paginatedLearners}
          onMessageLearner={onMessageLearner}
        />
      </div>
      <table className="hidden md:table w-full text-sm">
        <thead>
          <tr className="border-b border-gray-100">
            {columns.map((col) => (
              <th
                key={col.field}
                className="text-left px-6 py-4 font-semibold text-gray-700 cursor-pointer select-none"
                onClick={() => handleSort(col.field)}
              >
                <div className="flex items-center gap-1">
                  {col.label}
                  <SortIcon field={col.field} sort={sort} />
                </div>
              </th>
            ))}
            <th className="text-left px-6 py-4 font-semibold text-gray-700">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {paginatedLearners.map((learner) => (
            <tr
              key={learner.id}
              className="border-b border-gray-50 hover:bg-gray-50/60 transition-colors"
            >
              <td className="px-6 py-3.5">
                <div className="flex items-center gap-3">
                  <Avatar src={learner.avatar} name={learner.name} />
                  <span className="font-medium text-gray-800">
                    {learner.name}
                  </span>
                </div>
              </td>
              <td className="px-6 py-3.5 text-gray-600">{learner.city}</td>
              <td className="px-6 py-3.5 text-gray-600">{learner.email}</td>
              <td className="px-6 py-3.5">
                <button
                  onClick={() => onMessageLearner?.(learner)}
                  className="p-2 rounded-lg hover:bg-blue-50 text-gray-400 hover:text-blue-500 transition-colors"
                  aria-label={`Message ${learner.name}`}
                >
                  <MessageTextIcon />
                </button>
              </td>
            </tr>
          ))}

          {paginatedLearners.length === 0 && (
            <tr>
              <td colSpan={4} className="px-6 py-12 text-center text-gray-400">
                No learners enrolled yet.
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="px-6 pb-6">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          itemsPerPage={itemsPerPage}
          onPageChange={setCurrentPage}
          onItemsPerPageChange={(count) => {
            setItemsPerPage(count);
            setCurrentPage(1);
          }}
        />
      </div>
    </div>
  );
};
