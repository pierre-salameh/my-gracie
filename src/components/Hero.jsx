import { motion } from "framer-motion";
import { useState } from "react";
import HeroMoon from "./HeroMoon";
import ShootingStar from "./ShootingStar";

export default function Hero() {

  const [launch, setLaunch] = useState(false);

  const startJourney = () => {

    setLaunch(true);

    setTimeout(() => {

      document
        .getElementById("counter")
        ?.scrollIntoView({
          behavior: "smooth"
        });

      setLaunch(false);

    }, 1800);

  };

  return (

    <section
      id="hero"
      className="hero"
    >

      <ShootingStar />
      <ShootingStar />
      <ShootingStar />
      <ShootingStar />
      <ShootingStar />
      <ShootingStar />
      <ShootingStar />
      <ShootingStar />
      <ShootingStar />
        <ShootingStar />
      <ShootingStar />
      <ShootingStar />
      <ShootingStar />

      <motion.div
        className="hero-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >

        <div
          className={
            launch
              ? "moon-launch active"
              : "moon-launch"
          }
        >
          <HeroMoon />
        </div>

      

        <motion.h1
          className="hero-title"
          initial={{
            y: 50,
            opacity: 0
          }}
          animate={{
            y: 0,
            opacity: 1
          }}
          transition={{
            delay: .8,
            duration: 1.5
          }}
        >
          Our Story
        </motion.h1>

        <motion.h2
          className="hero-subtitle"
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 1
          }}
          transition={{
            delay: 1.5
          }}
        >
          Two Souls • One Story
        </motion.h2>

        <motion.p
          className="hero-quote"
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 1
          }}
          transition={{
            delay: 2.2
          }}
        >
         Before you,
         <br></br>
the stars were only lights in the sky.
<br></br>

After you,
<br></br>
they became memories.
        </motion.p>

        <motion.button
          className="hero-button"
          whileHover={{
            scale: 1.05
          }}
          whileTap={{
            scale: 0.95
          }}
          onClick={startJourney}
        >
          Explore Our Story
        </motion.button>

        {launch && (

          <div className="universe-loading">

            Entering Our Universe...

          </div>

        )}

      </motion.div>

    </section>

  );
}