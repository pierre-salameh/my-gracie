import { motion } from "framer-motion";

export default function GracieStar() {

  return (

    <motion.div
      className="gracie-star"
      animate={{
        scale: [1, 1.08, 1]
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      style={{
        willChange: "transform"
      }}
    >

      ✦

      <div className="star-name">
        Gracie
      </div>

    </motion.div>

  );

}