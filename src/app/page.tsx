import ProjectsList from "@/components/projects";
import ExperienceTimeline from "@/components/experience";
import SkillsGrid from "@/components/skills";
import Education from "@/components/education";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    // <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    //   <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
    <div className="flex flex-col items-center min-h-screen  px-6 sm:px-12 lg:px-24">
      <main className="flex flex-col gap-8 w-full max-w-5xl">
        <Hero />
        <ProjectsList />
        <ExperienceTimeline />
        <SkillsGrid />
        <Education />

      </main>
    </div>
  );
}
