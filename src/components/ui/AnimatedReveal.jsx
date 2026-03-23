// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export function AnimatedReveal({ children, delay = 0, direction = "up", className = "", stagger = false }) {
  const directions = {
    up: { y: 60, x: 0 },
    down: { y: -60, x: 0 },
    left: { x: 60, y: 0 },
    right: { x: -60, y: 0 },
    none: { x: 0, y: 0 }
  };

  const initial = {
    opacity: 0,
    scale: 0.9,
    ...directions[direction]
  };

  const whileInView = {
    opacity: 1,
    scale: 1,
    y: 0,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 110,
      damping: 14,
      mass: 0.8,
      delay: delay,
    }
  };

  if (stagger) {
    return (
      <motion.div
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1,
              delayChildren: delay
            }
          }
        }}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        className={className}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={initial}
      whileInView={whileInView}
      viewport={{ once: true, margin: "-50px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
