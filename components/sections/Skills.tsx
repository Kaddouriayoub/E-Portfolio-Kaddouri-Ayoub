"use client";
import { motion } from "framer-motion";
import {
  Code, MessageSquare, BarChart, Users, Globe, Star,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { skillCategories } from "@/data/skills";

const iconMap: Record<string, React.ElementType> = {
  Code, MessageSquare, BarChart, Users, Globe, Star,
};

const colors = [
  "bg-blue-50 text-blue-600 border-blue-100",
  "bg-purple-50 text-purple-600 border-purple-100",
  "bg-emerald-50 text-emerald-600 border-emerald-100",
  "bg-orange-50 text-orange-600 border-orange-100",
  "bg-rose-50 text-rose-600 border-rose-100",
  "bg-accent/10 text-accent border-accent/20",
];

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Skills"
          title="Competencies & Expertise"
          subtitle="A comprehensive overview of my professional skills and competencies across key areas."
          centered
          className="mb-16"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, i) => {
            const Icon = iconMap[cat.icon] || Star;
            const colorClass = colors[i % colors.length];

            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <Card hover className="h-full">
                  <div className="flex items-center gap-3 mb-5">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center border ${colorClass}`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-navy">{cat.category}</h3>
                  </div>

                  <ul className="space-y-2.5">
                    {cat.skills.map((skill) => (
                      <li
                        key={skill}
                        className="flex items-center gap-2 text-sm text-slate-600"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
