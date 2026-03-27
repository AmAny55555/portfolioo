"use client";

import { motion } from "framer-motion";
import { Info } from "lucide-react";
import { ABOUT } from "@/lib/constants/about";

export default function About() {
  return (
    <section
      id="about"
      className="w-full mt-10 md:mt-14 lg:mt-16 mb-16 md:mb-20 lg:mb-24"
      dir="rtl"
    >
      <div className="w-full px-4 md:px-8 lg:px-16 xl:px-24">
        <motion.div
          className="bg-white rounded-2xl border border-[#E5E7EB] shadow-[0_6px_20px_rgba(11,60,93,0.08)] p-6 sm:p-8 md:p-12 lg:p-14 min-h-[280px] sm:min-h-[320px] md:min-h-[360px] flex flex-col justify-start"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
     
          <div className="flex items-center justify-center gap-3 mb-10">
            <div className="h-10 w-10 md:h-11 md:w-11 flex items-center justify-center rounded-xl bg-[#EAF6FF] text-[#1DA1F2] shrink-0">
              <Info size={20} />
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0B3C5D]">
              {ABOUT.title}
            </h2>
          </div>

        
          <p className="text-[#1F1F1F] text-sm sm:text-base md:text-lg leading-7 sm:leading-8 md:leading-9 text-center max-w-3xl mx-auto min-h-[80px]">
            {ABOUT.description}
          </p>
        </motion.div>
      </div>
    </section>
  );
}