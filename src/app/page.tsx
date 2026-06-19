"use client";

import Hero_Section from "@/components/sections/Hero_Section";
import Footer_Section from "@/components/sections/Footer_Section";
import TwoColumnSection from "@/components/sections/TwoColumnSection";
import Pricing_Section_Mobile from "@/components/sections/Pricing_Section_Mobile";
import FAQ_Section from "@/components/sections/FAQ_Section";
import bodyData from "@/data/body_data.json";
import Banner_section from "@/components/sections/Banner_section";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero_Section />
      {bodyData.map((section, idx) => (
        <TwoColumnSection
          key={idx}
          label={section.label}
          title={section.title}
          description={section.description}
          imageSrc={section.imageSrc}
          imageAlt={section.imageAlt}
          reverse={section.reverse}
        />
      ))}
      <Banner_section />
      <FAQ_Section />
      <Pricing_Section_Mobile />
      <Footer_Section />
    </div>
  );
}
