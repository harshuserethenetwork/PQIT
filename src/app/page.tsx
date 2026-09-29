import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import StatsSection from "@/components/home/StatsSection";
import ValuePropositionSection from "@/components/home/ValuePropositionSection";
import ServicesOverview from "@/components/home/ServicesOverview";
import BpmAdvantagesSection from "@/components/home/BpmAdvantagesSection";
import ProcessSection from "@/components/home/ProcessSection";
import TechnologySection from "@/components/home/TechnologySection";
import IndustriesSection from "@/components/home/IndustriesSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import WhyUsSection from "@/components/home/WhyUsSection";
import CtaBanner from "@/components/home/CtaBanner";

export const metadata: Metadata = {
  title: "Process IQ Tech | Intelligent Business Process Management",
  description:
    "AI-powered BPM solutions that streamline operations, reduce costs by up to 45%, and accelerate growth for 500+ global enterprises.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ValuePropositionSection />
      <StatsSection />
      <ServicesOverview />
      <BpmAdvantagesSection />
      <ProcessSection />
      <TechnologySection />
      <IndustriesSection />
      <TestimonialsSection />
      <WhyUsSection />
      <CtaBanner />
    </>
  );
}
