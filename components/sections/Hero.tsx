"use client";
import { motion } from "framer-motion";
import { ArrowDown, FileText, Briefcase, MapPin, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { profile } from "@/data/profile";

export function Hero() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      className="min-h-screen bg-offwhite flex flex-col justify-center relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full -translate-y-1/4 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-navy/5 rounded-full translate-y-1/3 -translate-x-1/4" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #14213D 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — text */}
          <div>
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-accent/10 text-accent rounded-full px-4 py-2 text-sm font-medium mb-6"
            >
              <GraduationCap className="w-4 h-4" />
              Academic &amp; Professional ePortfolio
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-navy leading-tight"
            >
              {profile.name}
            </motion.h1>

            {/* Title */}
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-4 text-xl text-accent font-semibold"
            >
              {profile.title}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-2 text-slate-500 flex items-center gap-1"
            >
              <MapPin className="w-4 h-4" />
              {profile.location} · {profile.university}
            </motion.p>

            {/* Summary */}
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 text-slate-600 text-lg leading-relaxed max-w-lg"
            >
              {profile.summary}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <Button size="lg" onClick={() => scrollTo("ppp")}>
                <Briefcase className="w-5 h-5" />
                Explore My Portfolio
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollTo("ppp")}>
                <FileText className="w-5 h-5" />
                View My CV
              </Button>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-10 flex items-center gap-8"
            >
              {[
                { value: "3", label: "Certifications" },
                { value: "2+", label: "Stages" },
                { value: "3+", label: "Projets majeurs" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-bold text-navy">{stat.value}</div>
                  <div className="text-xs text-slate-400 mt-0.5">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — profile photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Decorative ring */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-accent/20 to-navy/20 scale-105 -z-10" />
              <div className="w-72 h-80 sm:w-80 sm:h-96 rounded-3xl bg-slate-100 overflow-hidden border-4 border-white shadow-2xl">
                {/* Profile photo */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/profile.jpg"
                  alt="KADDOURI Ayoub"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Floating badge — University */}
              <motion.div
                animate={{ y: [-4, 4, -4] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-4 bg-white rounded-2xl px-4 py-2 shadow-lg border border-slate-100"
              >
                <p className="text-xs text-slate-500">University</p>
                <p className="text-sm font-bold text-navy">{profile.university}</p>
              </motion.div>

              {/* Floating badge — Degree */}
              <motion.div
                animate={{ y: [4, -4, 4] }}
                transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 bg-accent rounded-2xl px-4 py-2 shadow-lg"
              >
                <p className="text-xs text-white/70">Degree</p>
                <p className="text-sm font-bold text-white">{profile.degree}</p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400 cursor-pointer"
          onClick={() => scrollTo("about")}
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ArrowDown className="w-4 h-4" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
