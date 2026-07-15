"use client";

import React from "react";
import Container from "@/src/components/Container";
import { motion } from "framer-motion";
import EditableText from "@/src/admin/components/EditableText";
import SectionThemeWrapper from "@/src/admin/components/SectionThemeWrapper";
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
    <SectionThemeWrapper sectionId="coe_papers" defaultTheme="dark">
      {(theme) => {
        const isDark = theme === "dark";
        return (
          <section
            id="research"
            className={`py-24 border-t transition-colors duration-300 relative overflow-hidden ${
              isDark
                ? "bg-slate-800 border-slate-700"
                : "bg-white border-gray-200"
            }`}
          >
            {/* Decorative glows (optional, matching other sections) */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/3 bg-slate-600/20" />

            <Container>
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, ease: "easeOut" }}
                className="text-center max-w-3xl mx-auto mb-16"
              >
                <h2
                  className={`font-heading text-3xl sm:text-4xl font-medium tracking-tight mb-4 ${
                    isDark ? "text-white" : "text-slate-800"
                  }`}
                >
                  <EditableText
                    path="coe.papers.heading"
                    fallback="Advancing the Frontiers of Technology"
                    as="span"
                  />
                </h2>
                <p
                  className={`text-base lg:text-lg font-medium leading-relaxed ${
                    isDark ? "text-gray-300" : "text-black"
                  }`}
                >
                  <EditableText
                    path="coe.papers.description"
                    fallback="Our research papers and technical publications represent our commitment to advancing knowledge in AI, automation, security, and quality engineering."
                    as="span"
                    multiline
                  />
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {paperItems.map((paper, idx) => (
                  <motion.div
                    key={paper.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.08, duration: 0.5 }}
                    className={`p-8 rounded-xl border transition-all hover:shadow-lg hover:-translate-y-1 group ${
                      isDark
                        ? "bg-slate-700/50 border-slate-600 hover:border-[#242A56]/40"
                        : "bg-white/80 backdrop-blur-sm border-gray-200/60 hover:border-[#242A56]/20 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)]"
                    }`}
                  >
                    {/* Tag with contrast fix */}
                    <div className="flex items-center gap-2 mb-4">
                      <span
                        className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border ${
                          isDark
                            ? "bg-[#242A56]/30 text-white border-[#242A56]/40"
                            : "bg-[#242A56]/10 text-[#242A56] border-[#242A56]/20"
                        }`}
                      >
                        <EditableText
                          path={`coe.papers.items.${idx}.tag`}
                          fallback={paper.tag}
                          as="span"
                        />
                      </span>
                    </div>
                    <h3
                      className={`font-heading text-lg font-bold mb-3 leading-snug ${
                        isDark ? "text-white" : "text-slate-800"
                      }`}
                    >
                      <EditableText
                        path={`coe.papers.items.${idx}.title`}
                        fallback={paper.title}
                        as="span"
                      />
                    </h3>
                    <p
                      className={`text-sm ${
                        isDark ? "text-gray-300" : "text-slate-600"
                      }`}
                    >
                      <EditableText
                        path={`coe.papers.items.${idx}.authors`}
                        fallback={paper.authors}
                        as="span"
                      />
                    </p>
                    <p
                      className={`text-xs ${
                        isDark ? "text-gray-400" : "text-slate-500"
                      }`}
                    >
                      <EditableText
                        path={`coe.papers.items.${idx}.publication`}
                        fallback={paper.publication}
                        as="span"
                      />
                    </p>
                    <div className="mt-6 pt-4 border-t border-slate-600">
                      <a
                        href={paper.link}
                        className={`inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider transition-colors group/link ${
                          isDark
                            ? "text-gray-300 hover:text-[#242A56]"
                            : "text-slate-700 hover:text-[#242A56]"
                        }`}
                      >
                        Read Paper
                        <svg
                          className="w-3.5 h-3.5 transform group-hover/link:translate-x-1 transition-transform"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2.5}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </Container>
          </section>
        );
      }}
    </SectionThemeWrapper>
  );
}