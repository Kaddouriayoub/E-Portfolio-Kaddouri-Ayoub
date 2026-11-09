"use client";
import { Mail, GraduationCap, Heart, ExternalLink, GitBranch } from "lucide-react";
import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
                <GraduationCap className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold">{profile.name}</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Academic &amp; Professional ePortfolio
            </p>
            <p className="text-slate-400 text-sm mt-1">{profile.title}</p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-semibold mb-4 text-sm tracking-wider uppercase text-slate-300">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              {[
                ["About", "#about"],
                ["Education", "#education"],
                ["Experience", "#experience"],
                ["PPP Career Project", "#ppp"],
                ["Contact", "#contact"],
              ].map(([label, href]) => (
                <li key={href}>
                  <a
                    href={href}
                    className="hover:text-accent transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-sm tracking-wider uppercase text-slate-300">
              Get In Touch
            </h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>
                <a
                  href={`mailto:${profile.email}`}
                  className="flex items-center gap-2 hover:text-accent transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  {profile.email}
                </a>
              </li>
              <li>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-accent transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  LinkedIn Profile
                </a>
              </li>
              <li>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-accent transition-colors"
                >
                  <GitBranch className="w-4 h-4" />
                  GitHub Profile
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <p>© 2025 {profile.name}. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with <Heart className="w-3 h-3 text-red-400 fill-red-400" /> for academic excellence
          </p>
        </div>
      </div>
    </footer>
  );
}
