"use client";
import { motion } from "framer-motion";
import {
  FolderOpen, FileText, Users, Briefcase, ClipboardCheck,
  Award, Presentation, Star,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { PresentationCard } from "@/components/ppp/PresentationCard";
import { DocumentLibrary } from "@/components/ppp/DocumentLibrary";

const categories = [
  { icon: FileText, label: "Curriculum Vitae", description: "Current CV, previous versions, and multilingual editions.", color: "bg-blue-50 text-blue-600" },
  { icon: FileText, label: "Cover Letters", description: "General and targeted cover letters for internships and positions.", color: "bg-purple-50 text-purple-600" },
  { icon: Users, label: "Mentor Interviews", description: "Summaries, insights, and lessons from professional mentor meetings.", color: "bg-amber-50 text-amber-600" },
  { icon: Briefcase, label: "Internship Reports", description: "Detailed reports on internship experiences and reflections.", color: "bg-accent/10 text-accent" },
  { icon: ClipboardCheck, label: "Project Assessments", description: "Academic project reports, evaluations, and feedback.", color: "bg-emerald-50 text-emerald-600" },
  { icon: Award, label: "Certificates", description: "Professional certifications and academic achievement documents.", color: "bg-indigo-50 text-indigo-600" },
  { icon: Presentation, label: "Oral Presentation", description: "My 6–8 slide PPP presentation for the oral examination.", color: "bg-rose-50 text-rose-600" },
  { icon: FolderOpen, label: "Other Documents", description: "Additional professional development and supporting materials.", color: "bg-slate-100 text-slate-600" },
];

export function PPPProject() {
  return (
    <section id="ppp" className="py-24 bg-offwhite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-start gap-4 mb-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-14 h-14 bg-accent rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg"
          >
            <Star className="w-7 h-7 text-white fill-white" />
          </motion.div>
          <SectionHeader
            eyebrow="PPP Career Project"
            title="Personal & Professional Project"
            subtitle="A comprehensive evidence portfolio documenting my academic journey, career planning, professional experiences, and development."
          />
        </div>

        {/* Category overview cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-14 mt-10"
        >
          {categories.map((cat, i) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-white rounded-2xl p-4 border border-slate-100 hover:border-accent/30 hover:shadow-sm transition-all cursor-default"
            >
              <div className={`w-9 h-9 rounded-xl flex items-center justify-center mb-3 ${cat.color}`}>
                <cat.icon className="w-4.5 h-4.5 w-[18px] h-[18px]" />
              </div>
              <h4 className="text-sm font-semibold text-navy leading-tight">{cat.label}</h4>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed line-clamp-2">
                {cat.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Presentation — prominently featured */}
        <div className="mb-14">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-xl font-bold text-navy flex items-center gap-2 mb-6"
          >
            <Presentation className="w-5 h-5 text-accent" />
            Oral Examination Presentation
          </motion.h3>
          <PresentationCard />
        </div>

        {/* Document Library */}
        <div>
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-xl font-bold text-navy flex items-center gap-2 mb-8"
          >
            <FolderOpen className="w-5 h-5 text-accent" />
            Document Library
          </motion.h3>

          {/* Upload instructions */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-8 p-5 bg-accent/5 border border-accent/15 rounded-2xl"
          >
            <p className="text-sm text-navy font-semibold mb-1">📁 How to add your documents</p>
            <p className="text-sm text-slate-500 leading-relaxed">
              Place your files in <code className="bg-white px-1.5 py-0.5 rounded text-accent text-xs">/public/documents/</code>, then update <code className="bg-white px-1.5 py-0.5 rounded text-accent text-xs">data/documents.ts</code> with the correct file path, title, and description. Your document will appear here automatically.
            </p>
          </motion.div>

          <DocumentLibrary />
        </div>
      </div>
    </section>
  );
}
