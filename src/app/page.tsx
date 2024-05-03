import { AboutMe, Experience, Header, Presentation, Projects, Technologies } from "@/components";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen relative flex-col items-center justify-between bg-slate-950 py-20 md-py-0">

      <Header />

      <Presentation />

      <Experience />

      <Projects />

      <AboutMe />

      <Technologies />

    </main>
  );
}
