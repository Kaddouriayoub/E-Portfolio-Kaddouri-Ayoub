"use client";
import { motion } from "framer-motion";
import { Target, TrendingUp, Star, Compass, Briefcase, Lightbulb } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { careerGoals, targetRoles, skillsToDevelope, professionalVision } from "@/data/goals";

const horizonColors = {
  "Short-term": { bg: "bg-emerald-50", text: "text-emerald-600", border: "border-emerald-100", dot: "bg-emerald-500" },
  "Medium-term": { bg: "bg-accent/10", text: "text-accent", border: "border-accent/20", dot: "bg-accent" },
  "Long-term": { bg: "bg-navy/10", text: "text-navy", border: "border-navy/20", dot: "bg-navy" },
};

const iconMap: Record<string, React.ElementType> = {
  Target, TrendingUp, Star,
};

export function CareerGoals() {
  return (
    <section id="goals" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Career Goals"
          title="My Professional Roadmap"
          subtitle="A structured vision of where I am headed and how I plan to get there."
          className="mb-16"
        />

        {/* Goals timeline */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {careerGoals.map((goal, i) => {
            const colors = horizonColors[goal.horizon];
            const Icon = iconMap[goal.icon] || Target;
            return (
              <motion.div
                key={goal.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
              >
                <Card hover padding="lg" className="h-full relative overflow-hidden">
                  {/* Top accent line */}
                  <div className={`absolute top-0 left-0 right-0 h-1 ${colors.dot}`} />

                  <div className="pt-2">
                    <span
                      className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full border ${colors.bg} ${colors.text} ${colors.border} mb-4`}
                    >
                      <span className={`w-1.5 h-1.5 rounded-full ${colors.dot}`} />
                      {goal.horizon}
                    </span>

                    <div className={`w-10 h-10 ${colors.bg} rounded-xl flex items-center justify-center mb-4`}>
                      <Icon className={`w-5 h-5 ${colors.text}`} />
                    </div>

                    <p className="text-xs text-slate-400 font-medium mb-2">{goal.timeframe}</p>
                    <h3 className="font-bold text-navy text-lg leading-tight mb-3">
                      {goal.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{goal.description}</p>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Target roles */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card padding="lg">
              <h3 className="font-bold text-navy text-lg flex items-center gap-2 mb-5">
                <Briefcase className="w-5 h-5 text-accent" />
                Target Roles & Industries
              </h3>
              <div className="space-y-3">
                {targetRoles.map((role) => (
                  <div key={role.title} className="flex items-center justify-between p-3 bg-slate-50 rounded-xl">
                    <span className="font-medium text-navy text-sm">{role.title}</span>
                    <Badge variant="accent">{role.industry}</Badge>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Skills to develop */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card padding="lg">
              <h3 className="font-bold text-navy text-lg flex items-center gap-2 mb-5">
                <Lightbulb className="w-5 h-5 text-accent" />
                Skills I Want to Develop
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillsToDevelope.map((s) => (
                  <Badge key={s} variant="outline">{s}</Badge>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Vision statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8"
        >
          <Card padding="lg" className="bg-navy text-white border-none">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                <Compass className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-bold text-xl mb-3">My Professional Vision</h3>
                <p className="text-slate-300 leading-relaxed">{professionalVision}</p>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
