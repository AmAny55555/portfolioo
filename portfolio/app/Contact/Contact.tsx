"use client";

import { Button } from "@/components/ui/button";
import { Phone, MapPin, MessageCircle } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { CONTACT } from "@/lib/constants/contact";

export default function Contact() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const whatsappLink = `https://wa.me/2${CONTACT.whatsapp}`;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const phone = `2${CONTACT.whatsapp}`;
    const text = `الاسم: ${name}\nالرسالة: ${message}`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank");
  };

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
                title: CONTACT.manager_name,
                value: CONTACT.phone,
              },
              {
                icon: MessageCircle,
                title: "واتساب / فون",
                value: CONTACT.whatsapp,
              },
              {
                icon: MapPin,
                title: "الموقع",
                value: CONTACT.location,
              },
            ].map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.3 }}
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

          <div className="mt-10 md:mt-12">
            <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-6">
              <input
                type="text"
                placeholder="اسمك"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full rounded-xl border border-[#D9E2EC] px-4 py-3 outline-none focus:border-[#1DA1F2]"
              />

              <textarea
                placeholder="اكتب رسالتك"
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="w-full rounded-xl border border-[#D9E2EC] px-4 py-3 outline-none focus:border-[#1DA1F2]"
              />

              <button
                type="submit"
                className="w-full bg-[#FF7A00] text-white py-3 rounded-full font-semibold hover:opacity-90 transition"
              >
                ارسال عبر واتساب
              </button>
            </form>
          </div>

          <div className="flex justify-center mt-10">
            <a href={whatsappLink} target="_blank">
              <Button className="bg-[#FF7A00] hover:bg-[#FF7A00] text-white px-8 py-6 rounded-full">
                راسلنا على واتساب
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}