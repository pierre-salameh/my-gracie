import { motion } from "framer-motion";

export default function GracieStar() {
  return (
    <motion.div
      className="gracie-star"
      animate={{
        scale: [1, 1.08, 1]
      }}
      transition={{
        duration: 3,
        repeat: Infinity
      }}
    >
      <img
        src="/star.png"
        alt="Gracie"
        className="gracie-star-image"
      />

      <div className="star-name">
        Gracie
      </div>
    </motion.div>
  );
}