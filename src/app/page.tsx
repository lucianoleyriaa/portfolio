import { AboutMe, Experience, Header, Presentation, Projects, Technologies } from "@/components";

export default function Home() {
  return (
    <main className="min-h-screen relative flex-col items-center justify-between dark:bg-slate-950 pb-20 md-py-0">

      <Header />

      <Presentation />

      <Experience />

      <Projects />

      <AboutMe />

      <Technologies />

    </main>
  );
}
