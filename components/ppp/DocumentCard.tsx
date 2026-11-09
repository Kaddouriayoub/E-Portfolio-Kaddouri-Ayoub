"use client";
import { motion } from "framer-motion";
import {
  FileText, Download, Eye, Calendar, Tag,
  FileCheck, FileSpreadsheet, Presentation,
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import type { Document } from "@/data/documents";

const formatIcons: Record<string, React.ElementType> = {
  PDF: FileText,
  DOCX: FileCheck,
  PPTX: Presentation,
  XLSX: FileSpreadsheet,
};

const formatColors: Record<string, string> = {
  PDF: "text-red-500 bg-red-50",
  DOCX: "text-blue-500 bg-blue-50",
  PPTX: "text-orange-500 bg-orange-50",
  XLSX: "text-green-500 bg-green-50",
};

const categoryColors: Record<string, string> = {
  CV: "bg-navy/10 text-navy",
  "Cover Letter": "bg-purple-50 text-purple-600",
  "Mentor Interview": "bg-amber-50 text-amber-600",
  "Internship Report": "bg-accent/10 text-accent",
  "Project Assessment": "bg-emerald-50 text-emerald-600",
  Presentation: "bg-rose-50 text-rose-600",
  Certificate: "bg-indigo-50 text-indigo-600",
  Other: "bg-slate-100 text-slate-600",
};

interface DocumentCardProps {
  doc: Document;
  index?: number;
}

export function DocumentCard({ doc, index = 0 }: DocumentCardProps) {
  const FormatIcon = formatIcons[doc.format] || FileText;
  const hasFile = !!doc.file;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 p-5 flex flex-col gap-4"
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-start gap-3 flex-1 min-w-0">
          <div
            className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
              formatColors[doc.format] || "text-slate-500 bg-slate-100"
            }`}
          >
            <FormatIcon className="w-5 h-5" />
          </div>
          <div className="min-w-0">
            <h4 className="font-semibold text-navy text-sm leading-tight line-clamp-2">
              {doc.title}
            </h4>
            {doc.language && (
              <p className="text-xs text-slate-400 mt-0.5">{doc.language}</p>
            )}
          </div>
        </div>
        {doc.featured && (
          <span className="bg-accent text-white text-xs px-2 py-0.5 rounded-full flex-shrink-0">
            Featured
          </span>
        )}
      </div>

      {/* Category + format */}
      <div className="flex flex-wrap gap-2">
        <span
          className={`text-xs font-medium px-3 py-1 rounded-full ${
            categoryColors[doc.category] || "bg-slate-100 text-slate-600"
          }`}
        >
          {doc.category}
        </span>
        <span className="text-xs font-mono bg-slate-100 text-slate-500 px-2 py-1 rounded-lg">
          {doc.format}
        </span>
      </div>

      {/* Description */}
      <p className="text-slate-500 text-sm leading-relaxed line-clamp-2 flex-1">
        {doc.description}
      </p>

      {/* Tags */}
      {doc.tags && doc.tags.length > 0 && (
        <div className="flex flex-wrap gap-1">
          {doc.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center gap-1 text-xs text-slate-400 bg-slate-50 px-2 py-0.5 rounded-full"
            >
              <Tag className="w-2.5 h-2.5" />
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Footer */}
      <div className="flex items-center justify-between pt-2 border-t border-slate-50">
        <span className="flex items-center gap-1 text-xs text-slate-400">
          <Calendar className="w-3 h-3" />
          {doc.date}
        </span>

        <div className="flex gap-2">
          {hasFile ? (
            <>
              <a
                href={doc.file!}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-medium text-accent hover:text-accent/80 transition-colors px-2 py-1 rounded-lg hover:bg-accent/5"
              >
                <Eye className="w-3.5 h-3.5" />
                Preview
              </a>
              <a
                href={doc.file!}
                download
                className="inline-flex items-center gap-1 text-xs font-medium bg-navy text-white hover:bg-navy/90 transition-colors px-3 py-1.5 rounded-lg"
              >
                <Download className="w-3.5 h-3.5" />
                Download
              </a>
            </>
          ) : (
            <span className="text-xs text-slate-300 italic">Not yet uploaded</span>
          )}
        </div>
      </div>
    </motion.div>
  );
}
