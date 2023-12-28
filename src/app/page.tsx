import { Motion } from "@/components/motion";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col w-full bg-background text-green-400 items-center justify-between p-24">
      <Motion
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut" }}
      >
        <div className="container mx-auto px-4 sm:px-8">Hello World</div>
      </Motion>
    </main>
  );
}
