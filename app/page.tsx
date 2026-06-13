import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import Hero from "@/components/home/Hero";
import IntroQuote from "@/components/home/IntroQuote";

import AboutSection from "@/components/home/AboutSection";
import FeaturedReflection from "@/components/home/FeaturedReflection";

import StatsStrip from "@/components/home/StatsStrip";
import FeaturedChapters from "@/components/home/FeaturedChapters";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <FeaturedReflection />
        <StatsStrip />
        <IntroQuote />
        <FeaturedChapters />
        <AboutSection />
      </main>

      <Footer />
    </>
  );
}