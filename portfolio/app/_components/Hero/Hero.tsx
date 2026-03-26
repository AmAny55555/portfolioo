"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FiArrowLeft, FiPhoneCall } from "react-icons/fi";
import { useEffect, useMemo, useState } from "react";
import { getCompany } from "./service";
import type { Company } from "./types";

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(media.matches);

    const onChange = (e: MediaQueryListEvent) => setReduced(e.matches);

    if (media.addEventListener) {
      media.addEventListener("change", onChange);
      return () => media.removeEventListener("change", onChange);
    }

    media.addListener(onChange);
    return () => media.removeListener(onChange);
  }, []);

  return reduced;
}

export default function Hero() {
  const [company, setCompany] = useState<Company | null>(null);
  const [typedName, setTypedName] = useState("");
  const [typedDescription, setTypedDescription] = useState("");
  const [showFirstButton, setShowFirstButton] = useState(false);
  const [showSecondButton, setShowSecondButton] = useState(false);

  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const fetchCompany = async () => {
      const data = await getCompany();
      setCompany(data);
    };

    fetchCompany();
  }, []);

  const content = useMemo(
    () => ({
      name: company?.name || "المستقبل تك",
      description: company?.description || "",
    }),
    [company]
  );

  useEffect(() => {
    if (!content.name && !content.description) return;

    if (prefersReducedMotion) {
      setTypedName(content.name);
      setTypedDescription(content.description);
      setShowFirstButton(true);
      setShowSecondButton(true);
      return;
    }

    setTypedName("");
    setTypedDescription("");
    setShowFirstButton(false);
    setShowSecondButton(false);

    let cancelled = false;
    const timeouts: NodeJS.Timeout[] = [];

    const typeText = (
      text: string,
      setter: React.Dispatch<React.SetStateAction<string>>,
      speed: number
    ) =>
      new Promise<void>((resolve) => {
        let i = 0;

        const run = () => {
          if (cancelled) return;

          setter(text.slice(0, i + 1));
          i += 1;

          if (i < text.length) {
            const id = setTimeout(run, speed);
            timeouts.push(id);
          } else {
            resolve();
          }
        };

        const id = setTimeout(run, speed);
        timeouts.push(id);
      });

    const startTyping = async () => {
      await typeText(content.name, setTypedName, 60);
      await typeText(content.description, setTypedDescription, 18);

      if (!cancelled) {
        setShowFirstButton(true);

        const id = setTimeout(() => {
          if (!cancelled) setShowSecondButton(true);
        }, 220);

        timeouts.push(id);
      }
    };

    startTyping();

    return () => {
      cancelled = true;
      timeouts.forEach(clearTimeout);
    };
  }, [content, prefersReducedMotion]);

  const heroImage = company?.hero_image || "/1.jpg";

  return (
    <section id="hero" className="w-full overflow-x-hidden" dir="rtl">
      <div className="mt-4 w-full px-2 min-[500px]:px-3 md:mt-10 md:px-4 lg:mt-12 lg:px-6 xl:px-8">
        <div className="relative overflow-hidden rounded-[18px] min-[500px]:rounded-[22px] lg:rounded-[28px] border border-[#E5E7EB] bg-white shadow-[0_14px_40px_rgba(11,60,93,0.08)] min-h-[360px] min-[500px]:min-h-[420px] md:min-h-[500px]">
          <Image
            src={heroImage}
            alt={company?.name || "المستقبل تك"}
            fill
            priority
            className="object-cover opacity-30"
          />

          <div className="absolute top-0 right-0 h-24 w-24 min-[500px]:h-36 min-[500px]:w-36 md:h-44 md:w-44 rounded-full bg-[#1DA1F2]/10 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 h-24 w-24 min-[500px]:h-36 min-[500px]:w-36 md:h-44 md:w-44 rounded-full bg-[#FF7A00]/10 blur-3xl pointer-events-none" />

          <div className="relative z-10 px-3 py-9 min-[500px]:px-4 min-[500px]:py-12 md:px-8 md:py-16 lg:px-14 lg:py-20 text-center lg:text-right">
            <div className="w-full max-w-3xl lg:mx-0">
              <h1 className="mt-2 min-[500px]:mt-4 text-[20px] min-[500px]:text-[22px] md:text-2xl lg:text-3xl font-extrabold text-[#0B3C5D] leading-[1.45] min-[500px]:leading-[1.5]">
                <span className="block min-h-[1.5em] break-words">
                  {typedName || " "}
                </span>
              </h1>

              <div className="mt-4 min-[500px]:mt-6 w-full max-w-2xl lg:mx-0 min-h-[90px] md:min-h-[120px]">
                <p className="text-[13px] min-[500px]:text-sm md:text-lg lg:text-xl leading-7 min-[500px]:leading-8 md:leading-9 text-[#34495E] font-medium italic opacity-90 tracking-wide break-words">
                  {typedDescription || " "}
                </p>
              </div>

              <div className="mt-6 min-[500px]:mt-8 flex flex-col gap-3 min-[500px]:gap-4 sm:flex-row justify-center lg:justify-start items-stretch sm:items-center">
                <div
                  className={`w-full sm:w-auto transition-all duration-500 ${
                    showFirstButton
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4 pointer-events-none"
                  }`}
                >
                  <Button
                    asChild
                    className="group w-full sm:w-auto h-11 min-[500px]:h-auto rounded-full bg-[#FF7A00] px-5 min-[500px]:px-8 py-2.5 min-[500px]:py-4 md:px-9 md:py-5 text-sm min-[500px]:text-base font-bold text-white shadow-md transition-all duration-300 hover:bg-[#e96f00] hover:shadow-[0_10px_25px_rgba(255,122,0,0.25)] hover:-translate-y-0.5"
                  >
                    <Link
                      href="#services"
                      className="flex items-center justify-center gap-2 w-full whitespace-nowrap"
                    >
                      <FiArrowLeft className="text-base min-[500px]:text-lg transition-transform duration-300 group-hover:-translate-x-1 shrink-0" />
                      <span className="truncate">عرض خدماتنا</span>
                    </Link>
                  </Button>
                </div>

                <div
                  className={`w-full sm:w-auto transition-all duration-500 ${
                    showSecondButton
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4 pointer-events-none"
                  }`}
                >
                  <Button
                    asChild
                    variant="outline"
                    className="group w-full sm:w-auto h-11 min-[500px]:h-auto rounded-full border-[#0B3C5D] px-5 min-[500px]:px-8 py-2.5 min-[500px]:py-4 md:px-9 md:py-5 text-sm min-[500px]:text-base font-bold text-[#0B3C5D] bg-white/80 shadow-sm transition-all duration-300 hover:bg-[#0B3C5D] hover:text-white hover:shadow-[0_10px_25px_rgba(11,60,93,0.15)] hover:-translate-y-0.5"
                  >
                    <Link
                      href="#contact"
                      className="flex items-center justify-center gap-2 w-full whitespace-nowrap"
                    >
                      <FiPhoneCall className="text-base min-[500px]:text-lg transition-transform duration-300 group-hover:scale-110 shrink-0" />
                      <span className="truncate">تواصل معنا</span>
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}