"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";
import { motion } from "framer-motion";
import { getProducts } from "./service";
import type { Product } from "./types";

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProducts();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  const getWhatsAppLink = (productName: string) => {
    const phone = "201283087083";
    const message = `مرحبا، اريد طلب ${productName}`;
    return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  };

  return (
    <section id="products" className="w-full" dir="rtl">
      <div className="w-full px-4 md:px-8 lg:px-16 xl:px-24 mt-14 md:mt-20">
        <div className="text-center mb-10 md:mb-12 flex items-center justify-center gap-3">
          <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-[#EAF6FF] text-[#1DA1F2]">
            <ShoppingBag size={20} />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-[#0B3C5D]">
            منتجاتنا
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
              }}
            >
              <Card className="rounded-2xl border border-[#E5E7EB] bg-white shadow-[0_6px_20px_rgba(11,60,93,0.08)] hover:shadow-[0_14px_40px_rgba(11,60,93,0.15)] transition-all duration-300 overflow-hidden">
                <img
                  src={
                    product.image
                      ? `${process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8000"}/services/${product.image}`
                      : "/placeholder.jpg"
                  }
                  alt={product.name}
                  className="w-full h-56 object-cover"
                />

                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold text-[#0B3C5D] mb-3">
                    {product.name}
                  </h3>

                  <p className="text-[#FF7A00] text-lg font-bold mb-5">
                    {product.price} جنيه
                  </p>

                  <a
                    href={getWhatsAppLink(product.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="bg-[#FF7A00] hover:bg-[#e96f00] text-white rounded-full px-6 py-3 w-full">
                      اطلب عبر واتساب
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}