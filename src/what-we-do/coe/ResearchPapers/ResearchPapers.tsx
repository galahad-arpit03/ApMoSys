"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, FileText } from "lucide-react";
import EditableText from "@/src/admin/components/EditableText";
import { useContentStore } from "@/src/admin/store/adminStore";

const papers = [
  {
    id: "1",
    title: "AI-Driven Test Automation: A Paradigm Shift in Quality Engineering",
    authors: "ApMoSys Research Team",
    publication: "Springer Nature, 2023",
    link: "#",
    tag: "AI & Automation",
  },
  {
    id: "2",
    title: "Performance Engineering for Microservices Architectures",
    authors: "ApMoSys Research Team",
    publication: "IEEE Xplore, 2023",
    link: "#",
    tag: "Performance",
  },
  {
    id: "3",
    title: "Zero-Trust Security Validation in CI/CD Pipelines",
    authors: "ApMoSys Research Team",
    publication: "Elsevier, 2024",
    link: "#",
    tag: "Security",
  },
];

export default function ResearchPapers() {
  const { content } = useContentStore();
  const paperItems = content.coe?.papers?.items || papers;

  return (
    <section
      id="research"
      className="py-10 lg:py-16 bg-[#0A1128] border-t border-[#1A264A] relative overflow-hidden"
    >
      {/* Subtle background glow */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#2563EB] rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#2563EB] rounded-full blur-[120px]" />
      </div>

      <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-16 relative z-10">
        {/* Split Header */}
        <div className="mb-12 lg:mb-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-5">
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-normal text-white leading-[1.1]">
              <EditableText
                path="coe.papers.heading"
                fallback="Advancing the Frontiers of Technology"
                as="span"
              />
            </h2>
          </div>
          <div className="lg:col-span-7">
            <p className="text-base lg:text-lg text-gray-300 leading-relaxed">
              <EditableText
                path="coe.papers.description"
                fallback="Our research papers and technical publications represent our commitment to advancing knowledge in AI, automation, security, and quality engineering."
                as="span"
                multiline
              />
            </p>
          </div>
        </div>

        {/* Papers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {paperItems.map((paper, idx) => (
            <motion.div
              key={paper.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.5 }}
              className="group relative bg-[#121B38] border border-[#1A264A] rounded-md p-8 transition-all hover:-translate-y-1 hover:border-[#2563EB]/40 hover:shadow-[0_0_40px_rgba(37,99,235,0.05)]"
            >
              {/* Tag */}
              <div className="flex items-center gap-2 mb-4">
                <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border bg-[#2563EB]/20 text-[#2563EB] border-[#2563EB]/30">
                  <EditableText
                    path={`coe.papers.items.${idx}.tag`}
                    fallback={paper.tag}
                    as="span"
                  />
                </span>
              </div>

              {/* Title */}
              <h3 className="text-base xl:text-lg font-medium text-white mb-3 leading-snug transition-colors group-hover:text-[#2563EB]">
                <EditableText
                  path={`coe.papers.items.${idx}.title`}
                  fallback={paper.title}
                  as="span"
                />
              </h3>

              {/* Authors */}
              <p className="text-[13px] xl:text-[14px] leading-snug text-gray-300">
                <EditableText
                  path={`coe.papers.items.${idx}.authors`}
                  fallback={paper.authors}
                  as="span"
                />
              </p>

              {/* Publication */}
              <p className="text-[11px] xl:text-[12px] leading-snug text-gray-400">
                <EditableText
                  path={`coe.papers.items.${idx}.publication`}
                  fallback={paper.publication}
                  as="span"
                />
              </p>

              {/* Read Link */}
              <div className="mt-6 pt-4 border-t border-[#1A264A]">
                <a
                  href={paper.link}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-300 hover:text-[#2563EB] transition-colors group/link"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <EditableText
                    path={`coe.papers.items.${idx}.linkText`}
                    fallback="Read Paper"
                    as="span"
                  />
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>

              {/* Decorative bottom line */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-0.5 bg-[#2563EB] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}