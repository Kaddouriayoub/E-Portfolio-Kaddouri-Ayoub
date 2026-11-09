"use client";
import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen, Calendar, MapPin } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { education, certifications } from "@/data/education";

export function Education() {
  return (
    <section id="education" className="py-24 bg-offwhite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Education"
          title="Academic Background"
          subtitle="My educational journey, key courses, and academic achievements."
          className="mb-16"
        />

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-slate-200 -translate-x-1/2" />

          <div className="space-y-12">
            {education.map((edu, i) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-white bg-accent shadow-md z-10 top-6" />

                {/* Spacer for opposite side */}
                <div className="hidden md:block flex-1" />

                {/* Card */}
                <div className="flex-1 ml-10 md:ml-0">
                  <Card hover>
                    {edu.current && (
                      <span className="inline-flex items-center gap-1 bg-green-50 text-green-600 text-xs font-medium px-3 py-1 rounded-full mb-3">
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                        Current
                      </span>
                    )}
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-navy/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <GraduationCap className="w-5 h-5 text-navy" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-navy text-lg">{edu.degree}</h3>
                        <p className="text-accent font-medium">{edu.institution}</p>
                        <div className="flex flex-wrap gap-3 mt-2 text-sm text-slate-500">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3.5 h-3.5" />
                            {edu.startYear} – {edu.endYear}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3.5 h-3.5" />
                            {edu.location}
                          </span>
                        </div>
                      </div>
                    </div>

                    <p className="mt-4 text-slate-500 text-sm leading-relaxed">{edu.description}</p>

                    {edu.courses.length > 0 && (
                      <div className="mt-4">
                        <h4 className="text-sm font-semibold text-navy mb-2 flex items-center gap-1">
                          <BookOpen className="w-4 h-4 text-accent" /> Key Courses
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {edu.courses.map((c) => (
                            <Badge key={c} variant="ghost">{c}</Badge>
                          ))}
                        </div>
                      </div>
                    )}

                    {edu.achievements.length > 0 && (
                      <div className="mt-4">
                        <h4 className="text-sm font-semibold text-navy mb-2 flex items-center gap-1">
                          <Award className="w-4 h-4 text-accent" /> Achievements
                        </h4>
                        <ul className="space-y-1">
                          {edu.achievements.map((a) => (
                            <li key={a} className="text-sm text-slate-500 flex items-start gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                              {a}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        {certifications.length > 0 && (
          <div className="mt-20">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl font-bold text-navy mb-8 flex items-center gap-2"
            >
              <Award className="w-6 h-6 text-accent" />
              Certifications
            </motion.h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {certifications.map((cert, i) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Card hover>
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Award className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-navy text-sm">{cert.title}</h4>
                        <p className="text-accent text-xs mt-0.5">{cert.issuer}</p>
                        <p className="text-slate-400 text-xs mt-1">{cert.date}</p>
                        <p className="text-slate-500 text-xs mt-2 leading-relaxed">{cert.description}</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
