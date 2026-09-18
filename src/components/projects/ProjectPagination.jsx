import React from "react";

export default function ProjectPagination({
  currentPage,
  totalPages,
  onPageChange,
}) {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav
      aria-label="Project Pagination"
      className="flex items-center justify-between pt-4 border-t border-slate-800/80"
    >
      <span className="text-xs text-slate-400">
        Page {currentPage} of {totalPages}
      </span>

      <div className="flex items-center gap-1.5">
        {/* Prev Button */}
        <button
          type="button"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`px-3 py-1 text-xs font-medium rounded-lg border transition ${
            currentPage === 1
              ? "border-slate-800 text-slate-600 cursor-not-allowed"
              : "border-slate-700 bg-slate-800/60 text-slate-300 hover:bg-slate-700/60 hover:text-white cursor-pointer"
          }`}
        >
          Prev
        </button>

        {/* Page Numbers */}
        {pages.map((page) => (
          <button
            key={page}
            type="button"
            onClick={() => onPageChange(page)}
            className={`w-7 h-7 text-xs font-medium rounded-lg transition flex items-center justify-center cursor-pointer ${
              currentPage === page
                ? "bg-indigo-600 text-white shadow-sm shadow-indigo-500/30"
                : "text-slate-400 hover:bg-slate-800 hover:text-slate-200"
            }`}
          >
            {page}
          </button>
        ))}

        {/* Next Button */}
        <button
          type="button"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`px-3 py-1 text-xs font-medium rounded-lg border transition ${
            currentPage === totalPages
              ? "border-slate-800 text-slate-600 cursor-not-allowed"
              : "border-slate-700 bg-slate-800/60 text-slate-300 hover:bg-slate-700/60 hover:text-white cursor-pointer"
          }`}
        >
          Next
        </button>
      </div>
    </nav>
  );
}
