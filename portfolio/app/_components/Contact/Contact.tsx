"use client";

import { Button } from "@/components/ui/button";
import { Phone, MapPin, MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import type { ContactType } from "./types";
import { getContact } from "./service";

export default function Contact() {
  const [contact, setContact] = useState<ContactType | null>(null);

  useEffect(() => {
    const fetchContact = async () => {
      const data = await getContact();
      setContact(data);
    };

    fetchContact();
  }, []);

  const whatsappLink = contact?.whatsapp
    ? `https://wa.me/2${contact.whatsapp}`
    : "#";

  return (
    <section id="contact" className="w-full">
      <div className="w-full px-4 md:px-8 lg:px-16 xl:px-24 mt-14 md:mt-20 mb-14">
        <div className="bg-white rounded-2xl border border-[#D9E2EC] shadow-sm px-6 py-10 md:px-10 md:py-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B3C5D]">
              تواصل معنا
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {[ 
              {
                icon: Phone,
                title: contact?.manager_name || "المهندس محمد حافظ",
                value: contact?.phone || "01283087083",
              },
              {
                icon: MessageCircle,
                title: "واتساب / فون",
                value: contact?.whatsapp || "01283087083",
              },
              {
                icon: MapPin,
                title: "الموقع",
                value: contact?.location || "مصر",
              },
            ].map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.3,
                  }}
                >
                  <div className="bg-[#F5F7FA] rounded-2xl p-6 text-center">
                    <div className="w-14 h-14 mx-auto rounded-2xl bg-white flex items-center justify-center mb-4">
                      <Icon className="w-7 h-7 text-[#FF7A00]" />
                    </div>
                    <h3 className="text-lg font-bold text-[#0B3C5D] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-[#1F1F1F]">{item.value}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="flex justify-center mt-8">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button className="bg-[#FF7A00] hover:bg-[#e96f00] text-white px-8 py-6 rounded-full shadow-sm">
                راسلنا على واتساب
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}