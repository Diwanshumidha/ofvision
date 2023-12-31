import Details from "@/components/Details";
import Features from "@/components/Features";
import HeroSection from "@/components/HeroSection";
import ManagementSolutions from "@/components/ManagementSolution";
import Partners from "@/components/Partners";
import AboutSection from "@/components/About";
import Faq from "@/components/Faq";
import { Motion } from "@/components/motion";
import Calendarly from "@/components/Calendarly";

export default function Home() {
  return (
    <main
      suppressHydrationWarning
      className=" md:px-9 lg:mt-12 space-y-36 px-4  lg:px-24 max-w-screen-xl mx-auto pb-32"
    >
      <Motion initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <HeroSection />
      </Motion>
      <Features />
      <ManagementSolutions />
      <Details />
      <Partners />
      <AboutSection />
      <Calendarly />
      <Faq />
    </main>
  );
}
