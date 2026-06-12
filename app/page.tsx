import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import Hero from "@/components/home/Hero";
import IntroQuote from "@/components/home/IntroQuote";
import SectionGrid from "@/components/home/SectionGrid";

import AboutSection from "@/components/home/AboutSection";
import FeaturedReflection from "@/components/home/FeaturedReflection";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <FeaturedReflection />
        <IntroQuote />
        <SectionGrid />
        <AboutSection />
      </main>

      <Footer />
    </>
  );
}