"use client";
import { motion } from "framer-motion";
import { Heart, Target, BookOpen, Lightbulb } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { profile } from "@/data/profile";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

export function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="About Me"
          title="Who I Am"
          subtitle="A driven student and emerging professional with a clear vision and a passion for growth."
          className="mb-16"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left */}
          <div className="space-y-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0}
              variants={fadeUp}
            >
              <p className="text-slate-600 text-lg leading-relaxed">
                {profile.summary}
              </p>
              <p className="mt-4 text-slate-600 leading-relaxed">
                {profile.pppDescription}
              </p>
            </motion.div>

            {/* Values */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
              variants={fadeUp}
            >
              <h3 className="font-bold text-navy text-lg mb-3 flex items-center gap-2">
                <Heart className="w-5 h-5 text-accent" /> Personal Values
              </h3>
              <div className="flex flex-wrap gap-2">
                {profile.values.map((v) => (
                  <Badge key={v} variant="outline">{v}</Badge>
                ))}
              </div>
            </motion.div>

            {/* Strengths */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={2}
              variants={fadeUp}
            >
              <h3 className="font-bold text-navy text-lg mb-3 flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-accent" /> Key Strengths
              </h3>
              <div className="flex flex-wrap gap-2">
                {profile.strengths.map((s) => (
                  <Badge key={s} variant="accent">{s}</Badge>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right — cards */}
          <div className="space-y-4">
            {[
              {
                icon: BookOpen,
                color: "bg-blue-50 text-blue-600",
                title: "Academic Background",
                content: `${profile.degree} · ${profile.university}`,
              },
              {
                icon: Target,
                color: "bg-accent/10 text-accent",
                title: "Career Objective",
                content: profile.careerObjective,
              },
              {
                icon: Heart,
                color: "bg-rose-50 text-rose-500",
                title: "Professional Interests",
                content:
                  "[Describe your professional interests here — e.g. strategic management, digital innovation, international business, etc.]",
              },
              {
                icon: Lightbulb,
                color: "bg-amber-50 text-amber-500",
                title: "Personal & Professional Project",
                content: profile.pppDescription,
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
              >
                <Card hover className="flex gap-4">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${item.color}`}
                  >
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy mb-1">{item.title}</h4>
                    <p className="text-slate-500 text-sm leading-relaxed line-clamp-3">
                      {item.content}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
