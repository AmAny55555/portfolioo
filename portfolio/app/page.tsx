"use client";

import { useEffect } from "react";

import Portfolio from "./_components/Portfolio";

import Hero from "./_components/Hero/Hero";
import Services from "./_components/Services/Services";
import Features from "./_components/Features/Features";
import Contact from "./_components/Contact/Contact";

export default function Home() {

  return (
    <div>
      <Hero />
      <Services />
        <Portfolio />
        <Features/>
        <Contact/>
    </div>
  );
}