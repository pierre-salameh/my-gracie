import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const memories = [

  {
    title: "23/10/2025",
    
    
  },

  {
    title: "18/11/2025",
 
  },

   {
    title: "18/2/2026",
  
  },

  {
    title: "19/2/2026",
  
  },

  {
    title: "20/2/2026",
  
  },


  {
    title: "20/5/2026",

  }

];

export default function Timeline() {

  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState(1);

  const nextPage = () => {

    setDirection(1);

    setPage((prev) =>
      prev === memories.length - 1
        ? 0
        : prev + 1
    );

  };

  const prevPage = () => {

    setDirection(-1);

    setPage((prev) =>
      prev === 0
        ? memories.length - 1
        : prev - 1
    );

  };

  return (

    <section
  id="memories"
  className="memory-book-section"
>

      <h2 className="book-title">
        Book Of Memories
      </h2>

      <div className="book-wrapper">

        <button
          className="book-arrow"
          onClick={prevPage}
        >
          ❮
        </button>

        <div className="cosmic-book">

          <div className="book-glow"></div>

          <AnimatePresence mode="wait">

            <motion.div
              key={page}
              className="memory-page"
              initial={{
                rotateY:
                  direction > 0
                    ? -90
                    : 90,
                opacity: 0
              }}
              animate={{
                rotateY: 0,
                opacity: 1
              }}
              exit={{
                rotateY:
                  direction > 0
                    ? 90
                    : -90,
                opacity: 0
              }}
              transition={{
                duration: 0.8
              }}
            >



<div className="page-hearts">

  {page === 0 ? (

    <>
      <span className="heart-white">🤍</span>
      <span className="heart-black">🖤</span>
    </>

  ) : page % 2 === 1 ? (

    <span className="heart-black">🖤</span>

  ) : (

    <span className="heart-white">🤍</span>

  )}

</div>
              <span className="page-date">
                {memories[page].date}
              </span>

              <h3>
                {memories[page].title}
              </h3>

              <div className="page-divider"></div>

              <p>
                {memories[page].text}
              </p>

            </motion.div>

          </AnimatePresence>

        </div>

        <button
          className="book-arrow"
          onClick={nextPage}
        >
          ❯
        </button>

      </div>

    </section>

  );

}