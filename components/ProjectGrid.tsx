"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { urlFor } from "@/lib/sanity.image";

export default function ProjectGrid({ projects }: { projects: Project[] }) {
  return (
    <>
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <div className="mb-10">
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Project List
          </h1>
          <p className="mt-3 text-lg text-zinc-600">All Projects.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
              transition={{
                type: "spring",
                stiffness: 140,
                damping: 18,
                delay: i * 0.05,
              }}
            >
              <Link
                href={`/work/${p.slug}`}
                className="group block overflow-hidden rounded-[28px] border border-zinc-200 bg-white shadow-[0_25px_70px_rgba(0,0,0,0.10)]"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <motion.img
                    src={
                      p.collage?.[0]
                        ? urlFor(p.collage[0]).width(1600).quality(90).url()
                        : ""
                    }
                    alt=""
                    className="h-full w-full object-cover"
                    whileHover={{ scale: 1.08 }}
                    transition={{ type: "spring", stiffness: 200, damping: 16 }}
                  />
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between gap-4">
                    <h2 className="text-xl font-semibold tracking-tight">
                      {p.title}
                    </h2>
                    <motion.span
                      className="text-zinc-400"
                      initial={{ x: 0 }}
                      whileHover={{ x: 6 }}
                      transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 16,
                      }}
                    >
                      →
                    </motion.span>
                  </div>

                  <p className="mt-3 text-sm leading-relaxed text-zinc-600">
                    {p.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Subtle, borderless footer "Home" link */}
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
      </div>
    </>
  );
}