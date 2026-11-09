"use client";
import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { FileSearch } from "lucide-react";
import { DocumentCard } from "./DocumentCard";
import { DocumentFilters } from "./DocumentFilters";
import { documents, type DocumentCategory } from "@/data/documents";

export function DocumentLibrary() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<DocumentCategory | "All">("All");

  const filtered = useMemo(() => {
    return documents.filter((doc) => {
      const matchCat = activeCategory === "All" || doc.category === activeCategory;
      const matchSearch =
        !search ||
        doc.title.toLowerCase().includes(search.toLowerCase()) ||
        doc.description.toLowerCase().includes(search.toLowerCase()) ||
        doc.category.toLowerCase().includes(search.toLowerCase()) ||
        (doc.tags || []).some((t) => t.toLowerCase().includes(search.toLowerCase()));
      return matchCat && matchSearch;
    });
  }, [search, activeCategory]);

  const counts = useMemo(() => {
    const c: Record<string, number> = { All: documents.length };
    documents.forEach((d) => {
      c[d.category] = (c[d.category] || 0) + 1;
    });
    return c;
  }, []);

  return (
    <div className="space-y-8">
      <DocumentFilters
        search={search}
        activeCategory={activeCategory}
        onSearch={setSearch}
        onCategory={setActiveCategory}
        counts={counts}
      />

      {filtered.length === 0 ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex flex-col items-center justify-center py-20 text-center"
        >
          <FileSearch className="w-12 h-12 text-slate-300 mb-4" />
          <h4 className="font-semibold text-slate-400 mb-2">No documents found</h4>
          <p className="text-slate-300 text-sm max-w-xs">
            {search
              ? `No results for "${search}". Try a different search term.`
              : "No documents in this category yet."}
          </p>
        </motion.div>
      ) : (
        <>
          <p className="text-sm text-slate-400">
            Showing <span className="font-semibold text-navy">{filtered.length}</span> document
            {filtered.length !== 1 ? "s" : ""}
            {activeCategory !== "All" && ` in "${activeCategory}"`}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
            {filtered.map((doc, i) => (
              <DocumentCard key={doc.id} doc={doc} index={i} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
