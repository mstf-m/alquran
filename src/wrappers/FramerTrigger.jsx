import { motion } from "framer-motion";

export default function FramerTrigger({ position, children, style }) {
  return (
    <motion.div
      initial={{ x: position, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{
        duration: 2,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      viewport={{ once: true }}
      className={style}
    >
      {children}
    </motion.div>
  );
}
