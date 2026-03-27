"use client";

import Image from "next/image";
import { Card } from "@/components/ui/card";
import { portfolioItems } from "@/lib/constants/portfolio";
import { Briefcase } from "lucide-react";
import { motion } from "framer-motion";

export default function Portfolio() {
  return (
    <section id="portfolio" className="w-full" dir="rtl">
      <div className="w-full px-4 md:px-8 lg:px-16 xl:px-24 mt-14 md:mt-20">
        <motion.div
          className="text-center mb-10 md:mb-12 flex items-center justify-center gap-3"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-[#EAF6FF] text-[#1DA1F2]">
            <Briefcase size={20} />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-[#0B3C5D]">
            أعمالنا
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.9,
                delay: index * 0.25,
              }}
            >
              <Card className="group overflow-hidden rounded-2xl border border-[#E5E7EB] bg-white p-0 shadow-[0_6px_20px_rgba(11,60,93,0.08)] hover:shadow-[0_14px_40px_rgba(11,60,93,0.15)] hover:-translate-y-1.5 transition-all duration-300">
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-[#0B3C5D]/70 opacity-0 group-hover:opacity-100 transition duration-500" />

                  <div className="absolute bottom-0 right-0 p-5 text-white opacity-0 group-hover:opacity-100 transition duration-500">
                    <h3 className="text-lg font-bold">{item.title}</h3>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}