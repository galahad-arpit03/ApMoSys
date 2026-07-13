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
            className={`py-24 border-t transition-colors duration-300 ${
              isDark
                ? "bg-[#121212] border-[#1F1F1F]"
                : "bg-[#FAFAFA] border-[#E8E8E8]"
            }`}
          >
            <Container>
              {/* Header */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, ease: "easeOut" }}
                className="text-center max-w-3xl mx-auto mb-16"
              >
                {/* <span className="text-primary-red text-xs font-bold uppercase tracking-widest block mb-4">
                  <EditableText
                    path="coe.papers.sectionLabel"
                    fallback="Research & Publications"
                    as="span"
                  />
                </span> */}
                <h2
                  className={`font-heading text-3xl sm:text-4xl font-extrabold mb-4 ${
                    isDark ? "text-[#FFFFFF]" : "text-[#121212]"
                  }`}
                >
                  <EditableText
                    path="coe.papers.heading"
                    fallback="Advancing the Frontiers of Technology"
                    as="span"
                  />
                </h2>
                <p
                  className={`text-sm sm:text-base leading-relaxed ${
                    isDark ? "text-[#A0A0A0]" : "text-[#5A5A5A]"
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

              {/* Papers Grid */}
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
                        ? "bg-[#1A1A1A] border-[#2A2A2A] hover:border-primary-red/30"
                        : "bg-[#FFFFFF] border-[#E8E8E8] hover:border-primary-red/20"
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-4">
                      <span
                        className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full ${
                          isDark
                            ? "bg-primary-red/10 text-primary-red border border-primary-red/20"
                            : "bg-primary-soft text-primary-red border border-primary-red/20"
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
                        isDark ? "text-[#FFFFFF]" : "text-[#121212]"
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
                        isDark ? "text-[#A0A0A0]" : "text-[#5A5A5A]"
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
                        isDark ? "text-[#7A7A7A]" : "text-[#7A7A7A]"
                      }`}
                    >
                      <EditableText
                        path={`coe.papers.items.${idx}.publication`}
                        fallback={paper.publication}
                        as="span"
                      />
                    </p>
                    <div className="mt-6 pt-4 border-t border-[#2A2A2A]">
                      <a
                        href={paper.link}
                        className={`inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider transition-colors group/link ${
                          isDark
                            ? "text-[#FFFFFF] hover:text-primary-red"
                            : "text-[#121212] hover:text-primary-red"
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