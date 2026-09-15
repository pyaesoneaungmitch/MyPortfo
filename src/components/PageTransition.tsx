import { motion, useReducedMotion } from "motion/react";

type PageTransitionProps = {
  children: React.ReactNode;
  className?: string;
};

export function PageTransition({ children, className = "page" }: PageTransitionProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 10 }}
      animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
      transition={{ duration: reduceMotion ? 0.12 : 0.28, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
