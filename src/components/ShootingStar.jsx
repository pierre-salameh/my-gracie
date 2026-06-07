import { motion } from "framer-motion";

export default function ShootingStar() {

  return (
    <motion.div
      className="meteor-wrapper"
      initial={{
        x: 300,
        y: -150,
        opacity: 0
      }}
      animate={{
        x: -1400,
        y: 900,
        opacity: [0, 1, 1, 0]
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        repeatDelay: 6,
        ease: "linear"
      }}
    >
      <div className="meteor-head" />
      <div className="meteor-tail" />
    </motion.div>
  );
}