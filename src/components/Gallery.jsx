import { motion } from "framer-motion";

const images = [
  {
    src: "/assets/pie77.jpg",
    alt: "Memory 1",
    rotate: 10
  },
  {
    src: "/assets/pie1.jpg",
    alt: "Memory 2",
    rotate: -10
  },
  {
    src: "/assets/pie2.jpg",
    alt: "Memory 3",
    rotate: 10
  },
  {
    src: "/assets/pie4.jpg",
    alt: "Memory 4",
    rotate: -10
  },
  {
    src: "/assets/pie5.jpg",
    alt: "Memory 5",
    rotate: 10
  }
];

export default function Gallery() {
  return (
    
    <section
      className="gallery"
      id="gallery"
    >
        
      {images.map((image, index) => (
        <motion.div
          key={index}
          className={`gallery-item ${
  index % 2 === 0
    ? "left"
    : "right"
}`}
          initial={{
            opacity: 0,
            y: 80
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true
          }}
          transition={{
            duration: 0.8,
            delay: index * 0.2
          }}
        >
          {/* الخط بين الصور */}
          {index !== images.length - 1 && (
            <div className="gallery-line"></div>
          )}

          {/* نقطة مضيئة */}
          <div className="gallery-dot"></div>

          {/* الصورة */}
          <motion.div
            className="glass-card"
            whileHover={{
              rotateY: image.rotate,
              rotateX: 5,
              scale: 1.05
            }}
          >
            <img
              src={image.src}
              alt={image.alt}
            />
          </motion.div>
        </motion.div>
      ))}
    </section>
  );
}