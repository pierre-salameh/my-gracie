import { motion } from "framer-motion";

export default function LoveMessage() {
  return (
    <section className="love-message"
    id="letter">

      <motion.div
        initial={{ opacity:0 }}
        whileInView={{ opacity:1 }}
        transition={{ duration:1.5 }}
      >
        <h2>To My Gracie ✨</h2>

        <p>
         Every day with you
         is another reason to smile,
         another memory to treasure.
        </p>
      </motion.div>

    </section>
  );
}