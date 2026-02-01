import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "whoami - Udhayakumar",
  description: "Software engineer",
  openGraph: {
    title: "Udhayakumar",
    description: "A calm and curious brain in a loud universe.",
    images: [
      {
        url: "https://udhayakumarth.com/og/whoami.png",
        width: 1200,
        height: 630,
      },
    ],
  }
};

export default function Home() {
  return (
    <div className="px-2 py-2">
      <Navbar currentPage="blogs" />

      <div className="mx-auto max-w-6xl px-4 py-8">
        <h1 className="scroll-m-20 text-4xl font-semibold tracking-tight text-balance mb-8">
          A calm and curious brain in a loud universe.
        </h1>
        <p className="text-lg font-semibold">Udhayakumar</p>
        <p className="text-muted-foreground text-sm mb-8">Software Engineer</p>
        <div className="border-b border-white/10 mt-2 mb-8" />
        
        <p className="leading-7 [&:not(:first-child)]:mt-3">
          Some lives begin quietly, shaped by borrowed footsteps and borrowed dreams, moving forward without knowing the destination. Days pass in small joys and simple fears, wrapped in ordinary comforts that slowly learn how to disappear. Time teaches its lessons early, turning softness into strength and questions into companions. In silence, through stories, screens, and sleepless thoughts, a self is rebuilt piece by piece. The road ahead remains unwritten, but each passing year carries a deeper promise — to rise, to grow, and to become more than yesterday.
        </p>

      </div>

      <Footer />
    </div>
  );
}

