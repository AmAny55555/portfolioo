"use client";

import Hero from "./Hero/Hero";
import Services from "./Services/Services";
import Features from "./Features/Features";
import Contact from "./Contact/Contact";
import Portfolio from "./portfolio/Portfolio";
import About from "./about/about";
import Products from "./products/products";
export default function Home() {
  return (
    <div className="flex flex-col gap-16 md:gap-24">
      <Hero />
      <About />
      <Services />
            <Products />
      <Portfolio />
      <Features />
      <Contact />
    </div>
  );
}