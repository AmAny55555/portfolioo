"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Wrench,
  Megaphone,
  MonitorSmartphone,
  ShieldCheck,
  Globe,
  Settings,
} from "lucide-react";
import { motion } from "framer-motion";
import type { Service } from "./types";
import { getServices } from "./service";

export default function Services() {
  const [services, setServices] = useState<Service[]>([]);

  const icons = [
    MonitorSmartphone,
    Megaphone,
    Wrench,
    ShieldCheck,
    Globe,
    Settings,
  ];

  useEffect(() => {
    const fetchServices = async () => {
      const data = await getServices();
      setServices(data);
    };

    fetchServices();
  }, []);

  return (
    <section id="services" className="w-full" dir="rtl">
      <div className="w-full px-4 md:px-8 lg:px-16 xl:px-24 mt-10 md:mt-14">
        <div className="text-center mb-10 md:mb-12 flex items-center justify-center gap-3">
          <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-[#EAF6FF] text-[#1DA1F2]">
            <Settings size={20} />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-[#0B3C5D]">
            خدماتنا
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = icons[index % icons.length];

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration:.9,
                  delay: index * 0.3,
                }}
              >
                <Card className="group rounded-2xl border border-[#E5E7EB] bg-white shadow-[0_6px_20px_rgba(11,60,93,0.08)] hover:shadow-[0_14px_40px_rgba(11,60,93,0.15)] hover:border-[#1DA1F2]/30 hover:-translate-y-1.5 transition-all duration-300">
                  <CardContent className="p-6 md:p-7">
                    <img
                      src={service.image_url || "/placeholder.jpg"}
                      alt={service.title}
                      className="w-full h-48 object-cover rounded-xl mb-4"
                    />

                    <div className="mb-5 flex items-center gap-3">
                      <div className="h-11 w-11 flex items-center justify-center rounded-xl bg-[#EAF6FF] text-[#1DA1F2] transition group-hover:bg-[#1DA1F2] group-hover:text-white">
                        <Icon size={22} />
                      </div>

                      <h3 className="text-xl font-bold text-[#0B3C5D]">
                        {service.title}
                      </h3>
                    </div>

                    <p className="text-[#1F1F1F] leading-7">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}