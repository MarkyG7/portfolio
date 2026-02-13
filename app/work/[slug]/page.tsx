import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllProjects, getProjectBySlug } from "@/lib/projects";
import { urlFor } from "@/lib/sanity.image";

export default async function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = await getProjectBySlug(params.slug);
  if (!project) return notFound();

  const all = await getAllProjects();
  const idx = all.findIndex((p) => p.slug === project.slug);
  const next = all[(idx + 1) % all.length];

  return (
    <main className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <Link
          href="/work"
          className="text-sm font-medium text-zinc-700 hover:text-zinc-900 transition-colors"
        >
          ← Project List
        </Link>
      </div>

      <header className="mx-auto max-w-6xl px-6 pb-14">
        <h1 className="text-5xl font-semibold tracking-tight sm:text-6xl">
          {project.title}
        </h1>

        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-zinc-600">
          {project.description}
        </p>

        {project.url && (
          <div className="mt-8">
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 rounded-full bg-zinc-900 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-zinc-800 hover:shadow-xl"
            >
              Visit Live Site
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                ↗
              </span>
            </a>
          </div>
        )}

        {/* Brief - Full Width */}
        <div className="mt-12">
          <div className="rounded-[32px] border border-zinc-200 bg-white p-10 shadow-[0_25px_70px_rgba(0,0,0,0.10)]">
            <p className="text-sm font-medium text-zinc-500">Brief</p>
            <p className="mt-4 max-w-4xl text-lg leading-relaxed text-zinc-700">
              {project.brief}
            </p>
          </div>
        </div>

        {/* Style + Features */}
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="rounded-[28px] border border-zinc-200 bg-white p-8 shadow-[0_25px_70px_rgba(0,0,0,0.10)]">
            <p className="text-sm font-medium text-zinc-500">Style</p>
            <p className="mt-4 text-base leading-relaxed text-zinc-700">
              {project.style}
            </p>
          </div>

          <div className="rounded-[28px] border border-zinc-200 bg-white p-8 shadow-[0_25px_70px_rgba(0,0,0,0.10)]">
            <p className="text-sm font-medium text-zinc-500">Features</p>
            <ul className="mt-4 space-y-3 text-base text-zinc-700">
              {project.features.map((f: string) => (
                <li key={f} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-900" />
                  <span className="leading-relaxed">{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="grid gap-6">
          {project.gallery?.map((img: any, i: number) => (
            <div
              key={i}
              className="overflow-hidden rounded-[28px] border border-zinc-200 bg-white shadow-[0_25px_70px_rgba(0,0,0,0.10)]"
            >
              <img
                src={urlFor(img).width(2200).quality(90).url()}
                alt=""
                className="h-auto w-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        <div className="mt-16 border-t border-zinc-100 pt-10">
          <div className="rounded-[28px] border border-zinc-200 bg-white p-8 shadow-[0_25px_70px_rgba(0,0,0,0.10)]">
            <p className="text-sm font-medium text-zinc-500">Reflection</p>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-zinc-700">
              {project.reflection}
            </p>
          </div>
        </div>

        <div className="mt-10 border-t border-zinc-100 pt-10">
          <Link
            href={`/work/${next.slug}`}
            className="group flex items-center justify-between rounded-[28px] border border-zinc-200 bg-white p-8 shadow-[0_25px_70px_rgba(0,0,0,0.10)]"
          >
            <div>
              <p className="text-sm font-medium text-zinc-600">Next</p>
              <p className="mt-2 text-2xl font-semibold tracking-tight">
                {next.title}
              </p>
            </div>
            <span className="text-2xl text-zinc-400 transition group-hover:translate-x-2">
              →
            </span>
          </Link>
        </div>

        {/* Same subtle, borderless footer "Home" link as the work page */}
        <footer className="mt-24 pb-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-900 transition-colors"
            aria-label="Back to Home"
          >
            <span aria-hidden>←</span>
            <span>Home</span>
          </Link>
        </footer>
      </section>
    </main>
  );
}