import Features from "@/components/Features";
import HeroSection from "@/components/HeroSection";
import ManagementSolutions from "@/components/ManagementSolution";
import { Motion } from "@/components/motion";
import { OpacityAnimation } from "@/lib/animations";
import Image from "next/image";

export default function Home() {
  return (
    <main className=" md:px-9 lg:mt-12 space-y-20  lg:px-24 max-w-screen-xl mx-auto">
      <HeroSection />
      <Features />
      <ManagementSolutions />
    </main>
  );
}
