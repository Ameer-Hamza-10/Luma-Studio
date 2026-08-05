import { Footer } from "@/components/Footer";
import {GalleryShowcase} from "@/components/GalleryShowcase";
import { HeroSection } from "@/components/HeroSection";
import { HowItWorksSection } from "@/components/HowItWorks";
import { PricingSection } from "@/components/PricingSection";
import Testimonials from "@/components/Testimonials";
import { Button } from "@/components/ui/button";
import { PricingTable } from "@clerk/nextjs";

export default function Home() {
  return (
    <main className="min-h-screen bg-background p-3 sm:p-4 lg:p-5">
      <HeroSection />
      <GalleryShowcase />
      <HowItWorksSection/>
      <PricingSection/>
      <Testimonials/>
      <Footer/>
    </main>
  );
}
