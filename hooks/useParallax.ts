// hooks/useParallax.ts
import { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";

export function useParallax(range: [number, number] = [-30, 30]) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], range);

  return { ref, y };
}