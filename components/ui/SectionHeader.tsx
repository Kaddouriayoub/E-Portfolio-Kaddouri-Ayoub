"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  centered = false,
  className,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={cn(centered && "text-center", className)}
    >
      {eyebrow && (
        <span className="inline-block text-accent text-sm font-semibold tracking-widest uppercase mb-3">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-navy leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-slate-500 text-lg max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
      <div className={cn("mt-4 h-1 w-12 bg-accent rounded-full", centered && "mx-auto")} />
    </motion.div>
  );
}
