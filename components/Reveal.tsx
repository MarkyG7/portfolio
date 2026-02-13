"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import clsx from "clsx";

export default function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { margin: "-15% 0px -15% 0px", once: true });

  return (
    <motion.div
      ref={ref}
      className={clsx(className)}
      initial={{ opacity: 0, y: 26, filter: "blur(10px)" }}
      animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
      transition={{ type: "spring", stiffness: 140, damping: 18, delay }}
    >
      {children}
    </motion.div>
  );
}
