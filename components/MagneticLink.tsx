"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import clsx from "clsx";

export default function MagneticLink({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLAnchorElement | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 260, damping: 18 });
  const sy = useSpring(y, { stiffness: 260, damping: 18 });

  function onMove(e: React.MouseEvent) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const mx = e.clientX - (r.left + r.width / 2);
    const my = e.clientY - (r.top + r.height / 2);
    x.set(mx * 0.12);
    y.set(my * 0.18);
  }

  function onLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div style={{ x: sx, y: sy }} className="inline-block">
      <Link
        ref={ref}
        href={href}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        className={clsx(
          "inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-5 py-2 text-sm font-medium",
          "shadow-[0_1px_0_rgba(0,0,0,0.06)] transition hover:border-zinc-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.10)]",
          className
        )}
      >
        {children}
        <span className="opacity-60">↗</span>
      </Link>
    </motion.div>
  );
}
