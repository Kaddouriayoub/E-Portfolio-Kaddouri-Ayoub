"use client";
import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, CheckCircle, TrendingUp } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { experiences } from "@/data/experience";

const typeColors: Record<string, string> = {
  Internship: "bg-accent/10 text-accent",
  "Part-time": "bg-blue-50 text-blue-600",
  "Full-time": "bg-green-50 text-green-600",
  "Academic Project": "bg-purple-50 text-purple-600",
  Volunteer: "bg-orange-50 text-orange-600",
};

export function Experience() {
  return (
    <section id="experience" className="py-24 bg-offwhite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Experience"
          title="Professional Experience"
          subtitle="My internships, projects, and professional engagements that shaped my career."
          className="mb-16"
        />

        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card hover padding="lg">
                <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                  {/* Icon */}
                  <div className="w-12 h-12 bg-navy/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Briefcase className="w-6 h-6 text-navy" />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <h3 className="text-xl font-bold text-navy">{exp.role}</h3>
                        <p className="text-accent font-semibold mt-0.5">{exp.company}</p>
                      </div>
                      <span
                        className={`text-xs font-medium px-3 py-1 rounded-full ${
                          typeColors[exp.type] || "bg-slate-100 text-slate-600"
                        }`}
                      >
                        {exp.type}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-4 mt-2 text-sm text-slate-500">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {exp.startDate} – {exp.endDate}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" />
                        {exp.location}
                      </span>
                    </div>

                    <p className="mt-4 text-slate-600 leading-relaxed">{exp.description}</p>

                    <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Responsibilities */}
                      <div>
                        <h4 className="text-sm font-semibold text-navy mb-3 flex items-center gap-1">
                          <CheckCircle className="w-4 h-4 text-accent" /> Responsibilities
                        </h4>
                        <ul className="space-y-2">
                          {exp.responsibilities.map((r) => (
                            <li key={r} className="flex items-start gap-2 text-sm text-slate-500">
                              <span className="w-1.5 h-1.5 bg-accent rounded-full mt-1.5 flex-shrink-0" />
                              {r}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Achievements */}
                      <div>
                        <h4 className="text-sm font-semibold text-navy mb-3 flex items-center gap-1">
                          <TrendingUp className="w-4 h-4 text-accent" /> Key Achievements
                        </h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((a) => (
                            <li key={a} className="flex items-start gap-2 text-sm text-slate-500">
                              <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-1.5 flex-shrink-0" />
                              {a}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Skills tags */}
                    {exp.skills.length > 0 && (
                      <div className="mt-5 flex flex-wrap gap-2">
                        {exp.skills.map((s) => (
                          <Badge key={s} variant="ghost">{s}</Badge>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
