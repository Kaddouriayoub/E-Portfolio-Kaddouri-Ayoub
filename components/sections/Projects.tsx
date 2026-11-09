"use client";
import { motion } from "framer-motion";
import { Code, ExternalLink, GitBranch, Layers } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { projects } from "@/data/projects";

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Projets Personnels"
          title="Réalisations Techniques"
          subtitle="Projets construits par curiosité, ambition et passion pour l'ingénierie — de l'observabilité cloud à l'architecture microservices."
          className="mb-16"
        />

        <div className="space-y-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card hover padding="lg" className="relative overflow-hidden">
                {project.featured && (
                  <div className="absolute top-0 right-0">
                    <div className="bg-accent text-white text-xs font-semibold px-4 py-1 rounded-bl-xl">
                      Projet phare
                    </div>
                  </div>
                )}

                <div className="flex flex-col gap-5">
                  {/* Header */}
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 bg-navy/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Code className="w-5 h-5 text-navy" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-navy leading-tight">{project.title}</h3>
                      <p className="text-accent font-medium text-sm mt-0.5">{project.subtitle}</p>
                    </div>
                  </div>

                  <p className="text-slate-600 leading-relaxed">{project.description}</p>

                  {/* Details */}
                  <div>
                    <h4 className="text-sm font-semibold text-navy mb-3 flex items-center gap-1.5">
                      <Layers className="w-4 h-4 text-accent" />
                      Points techniques clés
                    </h4>
                    <ul className="space-y-2">
                      {project.details.map((d) => (
                        <li key={d} className="flex items-start gap-2 text-sm text-slate-500">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-50">
                    {project.techStack.map((tech) => (
                      <Badge key={tech} variant="ghost">{tech}</Badge>
                    ))}
                  </div>

                  {/* Links */}
                  {(project.githubUrl || project.liveUrl) && (
                    <div className="flex gap-3">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm text-navy hover:text-accent transition-colors font-medium"
                        >
                          <GitBranch className="w-4 h-4" />
                          GitHub
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm text-navy hover:text-accent transition-colors font-medium"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Demo
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
