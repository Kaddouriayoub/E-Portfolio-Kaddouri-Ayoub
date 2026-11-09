"use client";
import { motion } from "framer-motion";
import {
  Presentation, Download, Eye, Layers, Calendar, Star,
} from "lucide-react";
import { oralPresentation } from "@/data/documents";

export function PresentationCard() {
  const pres = oralPresentation;
  const hasFile = !!pres.file;
  const hasPdf = !!pres.pdfPreview;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative bg-gradient-to-br from-navy via-navy/95 to-navy/90 rounded-3xl p-8 text-white overflow-hidden"
    >
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full -translate-y-1/3 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/3 -translate-x-1/3" />
      </div>

      <div className="relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-accent/20 text-accent border border-accent/30 rounded-full px-4 py-1.5 text-sm font-medium mb-6">
          <Star className="w-4 h-4 fill-current" />
          Oral Examination Presentation
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left — info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center">
                <Presentation className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-white/60 text-sm">PPP Career Project</p>
                <h3 className="text-xl font-bold">{pres.title}</h3>
              </div>
            </div>

            <p className="text-white/70 text-sm leading-relaxed mb-5">
              {pres.description}
            </p>

            <div className="flex flex-wrap gap-4 text-sm text-white/60 mb-6">
              <span className="flex items-center gap-1.5">
                <Layers className="w-4 h-4 text-accent" />
                {pres.slideCount} Slides
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-accent" />
                {pres.date}
              </span>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-3">
              {hasPdf ? (
                <a
                  href={pres.pdfPreview!}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white text-sm font-medium px-5 py-2.5 rounded-xl transition-all"
                >
                  <Eye className="w-4 h-4" />
                  Preview Slides
                </a>
              ) : (
                <span className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-white/40 text-sm px-5 py-2.5 rounded-xl cursor-not-allowed">
                  <Eye className="w-4 h-4" />
                  Preview Not Available
                </span>
              )}

              {hasFile ? (
                <a
                  href={pres.file!}
                  download
                  className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-all shadow-lg"
                >
                  <Download className="w-4 h-4" />
                  Download .PPTX
                </a>
              ) : (
                <span className="inline-flex items-center gap-2 bg-accent/30 border border-accent/30 text-white/50 text-sm px-5 py-2.5 rounded-xl cursor-not-allowed">
                  <Download className="w-4 h-4" />
                  File Not Yet Uploaded
                </span>
              )}
            </div>
          </div>

          {/* Right — thumbnail / placeholder */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-xs aspect-video rounded-2xl overflow-hidden border-2 border-white/10 bg-white/5 flex flex-col items-center justify-center gap-3">
              {pres.thumbnail ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={pres.thumbnail}
                  alt="Presentation thumbnail"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="flex flex-col items-center gap-2 p-6 text-center">
                  <Presentation className="w-10 h-10 text-white/30" />
                  <p className="text-white/40 text-sm">Presentation Thumbnail</p>
                  <p className="text-white/25 text-xs">
                    Add to /public/images/presentation-thumbnail.png
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
