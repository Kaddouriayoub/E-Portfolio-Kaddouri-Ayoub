"use client";
import { Search, X } from "lucide-react";
import { documentCategories, type DocumentCategory } from "@/data/documents";

interface DocumentFiltersProps {
  search: string;
  activeCategory: DocumentCategory | "All";
  onSearch: (v: string) => void;
  onCategory: (c: DocumentCategory | "All") => void;
  counts: Record<string, number>;
}

export function DocumentFilters({
  search,
  activeCategory,
  onSearch,
  onCategory,
  counts,
}: DocumentFiltersProps) {
  return (
    <div className="space-y-4">
      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
        <input
          type="text"
          value={search}
          onChange={(e) => onSearch(e.target.value)}
          placeholder="Search documents..."
          className="w-full pl-10 pr-10 py-2.5 text-sm bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
        />
        {search && (
          <button
            onClick={() => onSearch("")}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Category pills */}
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => onCategory("All")}
          className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
            activeCategory === "All"
              ? "bg-navy text-white shadow-sm"
              : "bg-white border border-slate-200 text-slate-600 hover:border-navy/30"
          }`}
        >
          All
          <span className="ml-1.5 text-xs opacity-70">({counts["All"] || 0})</span>
        </button>
        {documentCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => onCategory(cat)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
              activeCategory === cat
                ? "bg-accent text-white shadow-sm"
                : "bg-white border border-slate-200 text-slate-600 hover:border-accent/40"
            }`}
          >
            {cat}
            {counts[cat] !== undefined && (
              <span className="ml-1.5 text-xs opacity-70">({counts[cat]})</span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
