"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, MessageSquare, User, Mail, Building2, PencilLine, ShieldCheck } from "lucide-react";

export default function CareersCTA() {
  const [formData, setFormData] = useState({ name: "", email: "", company: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate network request
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: "", email: "", company: "", message: "" });
      alert("Thank you! Your message has been sent.");
    }, 1500);
  };

  return (
    <section id="careers" className="py-8 lg:py-16 bg-[#FAFBFC] border-t border-gray-100 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-50/50 via-transparent to-transparent pointer-events-none" />
      
      <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-16 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20 relative z-10">
        
        {/* LHS: Globe Visualization */}
        <div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-start">
          <div className="w-full aspect-square max-w-[650px] relative pointer-events-auto">
            <iframe
              title="Interactive Global Operations Visualization"
              src="/amcharts/examples/map-sankey-waypoints/index.html"
              className="w-full h-full border-none overflow-hidden"
              style={{ background: "transparent" }}
            />
          </div>
        </div>

        {/* RHS: Contact Form */}
        <div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-end">
          <div className="w-full max-w-[550px] bg-white rounded-3xl p-8 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100">
            
            {/* Header Icon */}
            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6 border border-blue-100/50">
              <MessageSquare className="w-6 h-6 text-blue-600" />
            </div>

            <div className="mb-8 text-left">
              <h2 className="text-3xl sm:text-4xl font-heading font-semibold text-gray-900 mb-2 tracking-tight">
                Get in Touch
              </h2>
              <p className="text-gray-500 text-sm sm:text-base font-medium">
                Reach out to our engineering experts today.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5 text-left">
                  <label htmlFor="name" className="text-[13px] font-bold text-gray-900">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input 
                      type="text" 
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full bg-white border border-gray-200 rounded-xl pl-10 pr-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-500 transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                </div>
                <div className="space-y-1.5 text-left">
                  <label htmlFor="email" className="text-[13px] font-bold text-gray-900">Work Email</label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input 
                      type="email" 
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full bg-white border border-gray-200 rounded-xl pl-10 pr-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-500 transition-all"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-1.5 text-left">
                <label htmlFor="company" className="text-[13px] font-bold text-gray-900">Company Name</label>
                <div className="relative">
                  <Building2 className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input 
                    type="text" 
                    id="company"
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                    className="w-full bg-white border border-gray-200 rounded-xl pl-10 pr-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-500 transition-all"
                    placeholder="Enterprise Inc."
                  />
                </div>
              </div>

              <div className="space-y-1.5 text-left">
                <label htmlFor="message" className="text-[13px] font-bold text-gray-900">How can we help?</label>
                <div className="relative">
                  <PencilLine className="absolute right-3.5 top-3.5 w-4 h-4 text-gray-400" />
                  <textarea 
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-500 transition-all resize-none"
                    placeholder="Tell us about your project requirements..."
                  />
                </div>
              </div>

              <motion.button 
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                disabled={isSubmitting}
                type="submit"
                className="w-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-medium rounded-xl px-6 py-3.5 flex items-center justify-center gap-2 transition-colors disabled:opacity-70 disabled:cursor-not-allowed shadow-md mt-4 text-[15px]"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Send className="w-4 h-4" />
                    Send Message
                  </span>
                )}
              </motion.button>
            </form>

            <div className="mt-6 flex items-center justify-center gap-2 text-gray-400">
              <ShieldCheck className="w-4 h-4" />
              <p className="text-[12px] font-medium">We respect your privacy. Your information is safe with us.</p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
