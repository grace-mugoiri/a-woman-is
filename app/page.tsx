import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import Hero from "@/components/home/Hero";
import IntroQuote from "@/components/home/IntroQuote";
import SectionGrid from "@/components/home/SectionGrid";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <IntroQuote />
        <SectionGrid />
      </main>

      <Footer />
    </>
  );
}