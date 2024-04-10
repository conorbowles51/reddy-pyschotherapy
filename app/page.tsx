import LandingSection from "@/components/landing-section";
import IntroSection from "@/components/intro-section";
import TestimonialsSection from "@/components/testimonials-section";
import ServicesSection from "@/components/services-section";
import BlogSection from "@/components/blog-section";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative">
      <div className="h-full z-[-100] pointer-events-none hidden xl:block">
        <Image 
          src="/assets/Trail.svg"
          alt="background decoration"
          className="z-[-1000]"
          layout="fill"
          objectFit="cover"
        />
      </div>

      <LandingSection />
      <IntroSection />
      <TestimonialsSection />
      <ServicesSection />
      <BlogSection />
    </main>
  );
}
