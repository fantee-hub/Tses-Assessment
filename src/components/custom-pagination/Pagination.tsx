import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface PaginationProps {
  currentPage?: number;
  totalPages?: number;
  itemsPerPage?: number;
  onPageChange: (page: number) => void;
  onItemsPerPageChange: (itemsPerPage: number) => void;
  itemsPerPageOptions?: number[];
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage = 1,
  totalPages = 24,
  itemsPerPage = 10,
  onPageChange,
  onItemsPerPageChange,
  itemsPerPageOptions = [10, 25, 50, 100],
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages && page !== currentPage) {
      onPageChange(page);
    }
  };

  const handleItemsPerPageChange = (value: number) => {
    onItemsPerPageChange(value);
    setIsDropdownOpen(false);
  };

  const getPageNumbers = (): (number | string)[] => {
    const pages = [];

    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);

      if (currentPage <= 3) {
        pages.push(2, 3, 4, "...", totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(
          "...",
          totalPages - 3,
          totalPages - 2,
          totalPages - 1,
          totalPages
        );
      } else {
        pages.push(
          "...",
          currentPage - 1,
          currentPage,
          currentPage + 1,
          "...",
          totalPages
        );
      }
    }

    return pages;
  };

  return (
    <div className="mt-10 flex justify-between md:flex-row flex-col md:items-center md:gap-0 gap-4 text-sm text-gray-500">
      <div className="relative">
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="flex items-center gap-2 border border-[#E8E8E8] rounded-full px-5 py-2.5 bg-white cursor-pointer text-[#636363] hover:border-gray-300 transition-colors"
        >
          <span>Show {itemsPerPage}/page</span>
          <span
            className={`text-sm transition-transform duration-200 ${
              isDropdownOpen ? "rotate-180" : ""
            }`}
          >
            <ChevronDown />
          </span>
        </button>

        <div
          className={`absolute left-0 md:w-full bottom-full mb-1 bg-white border border-gray-200 rounded shadow-lg z-10 overflow-hidden transition-all duration-200 origin-bottom ${
            isDropdownOpen
              ? "opacity-100 scale-y-100 visible"
              : "opacity-0 scale-y-0 invisible"
          }`}
        >
          {itemsPerPageOptions.map((option) => (
            <button
              key={option}
              onClick={() => handleItemsPerPageChange(option)}
              className={`block w-full text-left px-4 py-2 hover:bg-gray-50 transition-colors ${
                option === itemsPerPage
                  ? "bg-blue-50 text-blue-600 font-medium"
                  : ""
              }`}
            >
              Show {option}/page
            </button>
          ))}
        </div>
      </div>

      <div className="flex md:gap-5 gap-2 items-center">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={` font-medium transition-colors ${
            currentPage === 1
              ? "text-[#8C8C8C] cursor-not-allowed"
              : "text-[##0A60E1] hover:text-[#0A60E1]"
          }`}
        >
          Prev
        </button>

        {getPageNumbers().map((page, index) => {
          if (page === "...") {
            return (
              <span key={`ellipsis-${index}`} className="px-2">
                ...
              </span>
            );
          }

          return (
            <button
              key={page}
              onClick={() => handlePageChange(page as number)}
              className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-150 cursor-pointer ${
                currentPage === page
                  ? "bg-[#0A60E1] text-sm text-white font-medium"
                  : "hover:bg-gray-100 border border-[#0A60E1] text-[#0A60E1]"
              }`}
            >
              {String(page).padStart(2, "0")}
            </button>
          );
        })}

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`ml-2 font-medium transition-colors ${
            currentPage === totalPages
              ? "text-[#8C8C8C] cursor-not-allowed"
              : "text-[##0A60E1] hover:text-[#0A60E1]"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
