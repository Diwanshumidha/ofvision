import Details from "@/components/Details";
import Features from "@/components/Features";
import HeroSection from "@/components/HeroSection";
import ManagementSolutions from "@/components/ManagementSolution";
import Partners from "@/components/Partners";
import AboutSection from "@/components/About";

export default function Home() {
  return (
    <main className=" md:px-9 lg:mt-12 space-y-20 px-4  lg:px-24 max-w-screen-xl mx-auto pb-32">
      <HeroSection />
      <Features />
      <ManagementSolutions />
      <Details />
      <Partners />
      <AboutSection />
    </main>
  );
}
