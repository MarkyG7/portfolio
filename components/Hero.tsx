"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full blur-3xl"
        initial={{ opacity: 0.2, scale: 0.9 }}
        animate={{ opacity: [0.2, 0.35, 0.2], scale: [0.9, 1.05, 0.9] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        style={{
          background:
            "radial-gradient(circle at 30% 30%, rgba(37,99,235,0.35), transparent 60%)",
        }}
      />

      <div className="mx-auto max-w-6xl px-6">
        <div className="flex min-h-[92vh] flex-col justify-center py-16">
          <motion.h1
            className="max-w-3xl text-5xl font-semibold leading-[0.95] tracking-tight sm:text-7xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 160, damping: 18 }}
          >
            Mark Greening. Archive of digital work.
          </motion.h1>

          <motion.p
            className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-600 sm:text-xl"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 150, damping: 18 }}
          >
            I design considered, visually-led websites built with clarity and intention.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
