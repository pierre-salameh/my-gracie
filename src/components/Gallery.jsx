import { motion } from "framer-motion";

export default function Gallery() {
  return (
    <section className="gallery"
    id="gallery">







 <motion.div
        className="glass-card"
        whileHover={{
          rotateY: 10,
          rotateX: 5,
          scale: 1.05
        }}
      >
        <img
          src="/assets/pie66.jpg"
          alt="Me"
        />
      </motion.div>





      <motion.div
        className="glass-card"
        whileHover={{
          rotateY: 10,
          rotateX: 5,
          scale: 1.05
        }}
      >
        <img
          src="/assets/pie1.jpg"
          alt="Me"
        />
      </motion.div>

      <motion.div
        className="glass-card"
        whileHover={{
          rotateY: -10,
          rotateX: 5,
          scale: 1.05
        }}
      >
        <img
          src="/assets/pie2.jpg"
          alt="Gracie"
        />
      </motion.div>


        <motion.div
        className="glass-card"
        whileHover={{
          rotateY: -10,
          rotateX: 5,
          scale: 1.05
        }}
      >
        <img
          src="/assets/pie3.jpg"
          alt="Gracie"
        />
      </motion.div>



           <motion.div
        className="glass-card"
        whileHover={{
          rotateY: 10,
          rotateX: 5,
          scale: 1.05
        }}
      >
        <img
          src="/assets/pie4.jpg"
          alt="Me"
        />
      </motion.div>


         <motion.div
        className="glass-card"
        whileHover={{
          rotateY: 10,
          rotateX: 5,
          scale: 1.05
        }}
      >
        <img
          src="/assets/pie5.jpg"
          alt="Me"
        />
      </motion.div>

    </section>
  );
}