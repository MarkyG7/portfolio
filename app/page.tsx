import Hero from "@/components/Hero";
import ProjectChapter from "@/components/ProjectChapter";
import { getAllProjects } from "@/lib/projects";

type ProjectListItem = {
  slug: string;
  featured?: boolean;
  order?: number | null;
  // include anything else you rely on in ProjectChapter:
  title: string;
  description: string;
  collage?: any[];
};

export default async function HomePage() {
  const all = (await getAllProjects()) as ProjectListItem[];

  const featured = all
    .filter((p: ProjectListItem) => Boolean(p.featured))
    .sort((a: ProjectListItem, b: ProjectListItem) => {
      const ao = a.order ?? Number.POSITIVE_INFINITY;
      const bo = b.order ?? Number.POSITIVE_INFINITY;
      return ao - bo;
    });

  return (
    <main>
      <Hero />

      <div id="work" className="border-t border-zinc-100">
        {featured.map((p, idx) => (
          <ProjectChapter key={p.slug} project={p as any} index={idx} />
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
