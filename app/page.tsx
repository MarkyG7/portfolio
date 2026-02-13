import Hero from "@/components/Hero";
import ProjectChapter from "@/components/ProjectChapter";
import { getAllProjects } from "@/lib/projects";

export default async function HomePage() {
  const all = await getAllProjects();

  // Featured projects, manually ordered by the `order` field (lowest number first).
  // Projects with no `order` set will fall to the bottom.
  const featured = all
    .filter((p) => p.featured)
    .sort((a, b) => {
      const ao = a.order ?? Number.POSITIVE_INFINITY;
      const bo = b.order ?? Number.POSITIVE_INFINITY;
      return ao - bo;
    });

  return (
    <main>
      <Hero />

      <div id="work" className="border-t border-zinc-100">
        {featured.map((p, idx) => (
          <ProjectChapter key={p.slug} project={p} index={idx} />
        ))}
      </div>

      <footer className="border-t border-zinc-100">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="flex flex-col gap-2 text-sm text-zinc-600">
            <span className="font-medium text-zinc-900">Portfolio</span>
            <span>© {new Date().getFullYear()} · MG Project archive</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
