"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import clsx from "clsx";
import { urlFor } from "@/lib/sanity.image";
import Reveal from "./Reveal";

export default function ProjectChapter({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const flip = index % 2 === 1;

  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className={clsx("grid items-center gap-10 lg:gap-14", "lg:grid-cols-12")}>
          <div className={clsx("lg:col-span-5", flip ? "lg:order-2" : "lg:order-1")}>
            <Reveal>
              <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                {project.title}
              </h2>

              <p className="mt-4 text-lg leading-relaxed text-zinc-600">
                {project.description}
              </p>

              <div className="mt-8">
                <Link href={`/work/${project.slug}`} className="group inline-flex items-center gap-3 text-base font-medium">
                  <span className="relative">
                    View project
                    <span className="absolute -bottom-1 left-0 h-[2px] w-full origin-left scale-x-0 bg-zinc-900 transition group-hover:scale-x-100" />
                  </span>
                  <motion.span
                    className="inline-block"
                    initial={{ x: 0 }}
                    whileHover={{ x: 6 }}
                    transition={{ type: "spring", stiffness: 260, damping: 16 }}
                  >
                    →
                  </motion.span>
                </Link>
              </div>
            </Reveal>
          </div>

          <div className={clsx("lg:col-span-7", flip ? "lg:order-1" : "lg:order-2")}>
            <motion.div
              className="relative aspect-[16/10] w-full"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15% 0px -15% 0px" }}
              transition={{ type: "spring", stiffness: 120, damping: 18 }}
            >
              <Link href={`/work/${project.slug}`} className="group block h-full">
                <motion.div
                  className="relative h-full rounded-[28px] border border-zinc-200 bg-white p-3 shadow-[0_25px_70px_rgba(0,0,0,0.10)]"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 240, damping: 16 }}
                >
                  <div className="grid h-full grid-cols-12 gap-3">
                    <div className="col-span-7 overflow-hidden rounded-2xl border border-zinc-200">
                      <motion.img
                        src={project.collage?.[0] ? urlFor(project.collage[0]).width(1600).quality(90).url() : ""}
                        alt=""
                        className="h-full w-full object-cover"
                        whileHover={{ scale: 1.06 }}
                        transition={{ type: "spring", stiffness: 200, damping: 16 }}
                      />
                    </div>

                    <div className="col-span-5 grid grid-rows-2 gap-3">
                      <div className="overflow-hidden rounded-2xl border border-zinc-200">
                        <motion.img
                          src={project.collage?.[1] ? urlFor(project.collage[1]).width(1200).quality(90).url() : ""}
                          alt=""
                          className="h-full w-full object-cover"
                          whileHover={{ scale: 1.06 }}
                          transition={{ type: "spring", stiffness: 200, damping: 16 }}
                        />
                      </div>

                      <div className="overflow-hidden rounded-2xl border border-zinc-200">
                        <motion.img
                          src={project.collage?.[2] ? urlFor(project.collage[2]).width(1200).quality(90).url() : ""}
                          alt=""
                          className="h-full w-full object-cover"
                          whileHover={{ scale: 1.06 }}
                          transition={{ type: "spring", stiffness: 200, damping: 16 }}
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
