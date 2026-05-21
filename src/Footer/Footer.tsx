"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-[#000000] border-t border-[#3A3A3A] py-16 mt-auto text-sm text-[#7A7A7A]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Brand Block */}
          <div className="space-y-4">
            <motion.span 
              whileHover={{ scale: 1.02 }}
              className="inline-block font-heading font-extrabold text-2xl tracking-tight text-[#FFFFFF]"
            >
              ApMoSys<span className="text-[#B40001]">.</span>
            </motion.span>
            <p className="text-xs text-[#5A5A5A] leading-relaxed">
              Global leaders in automated quality engineering, security validation, and intelligent digital systems optimization.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="font-heading font-bold text-xs uppercase tracking-wider text-[#FAFAFA] mb-4">Company</h5>
            <ul className="space-y-2 text-xs">
              {[
                { label: "About Us", href: "#about" },
                { label: "Careers", href: "#careers" },
                { label: "Blogs & News", href: "#blogs" },
                { label: "Press Releases", href: "#press" }
              ].map((link) => (
                <li key={link.label}>
                  <motion.a 
                    href={link.href} 
                    whileHover={{ x: 4, color: "#B40001" }}
                    className="inline-block hover:text-[#B40001] transition-colors"
                  >
                    {link.label}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h5 className="font-heading font-bold text-xs uppercase tracking-wider text-[#FAFAFA] mb-4">Core Systems</h5>
            <ul className="space-y-2 text-xs">
              {[
                { label: "cliQTest Platform", href: "#" },
                { label: "Netraa AI Vision", href: "#" },
                { label: "Performance Tuning", href: "#" },
                { label: "Continuous QA", href: "#" }
              ].map((link) => (
                <li key={link.label}>
                  <motion.a 
                    href={link.href} 
                    whileHover={{ x: 4, color: "#B40001" }}
                    className="inline-block hover:text-[#B40001] transition-colors"
                  >
                    {link.label}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h5 className="font-heading font-bold text-xs uppercase tracking-wider text-[#FAFAFA] mb-4">HQ Contact</h5>
            <ul className="space-y-2 text-xs text-[#5A5A5A] leading-relaxed">
              <li>Mahape, Navi Mumbai, India</li>
              <li>Email: contact@apmosys.com</li>
              <li>Tel: +91 22 4976 5600</li>
            </ul>
          </div>

        </div>

        <div className="border-t border-[#1F1F1F] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#5A5A5A]">
            © {new Date().getFullYear()} ApMoSys Technologies. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-[#5A5A5A]">
            <motion.a whileHover={{ color: "#FAFAFA" }} href="#" className="hover:text-[#FAFAFA] transition-colors">Privacy Policy</motion.a>
            <motion.a whileHover={{ color: "#FAFAFA" }} href="#" className="hover:text-[#FAFAFA] transition-colors">Terms of Service</motion.a>
            <motion.a whileHover={{ color: "#FAFAFA" }} href="#" className="hover:text-[#FAFAFA] transition-colors">SLA Agreement</motion.a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
