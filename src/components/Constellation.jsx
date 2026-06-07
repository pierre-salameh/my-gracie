import { useState, useRef } from "react";
import { motion } from "framer-motion";

const songs = [

  {
    
    file: "/songs/khaw.mp3"
  },

  {
   
    file: "/songs/bday.mp3"
  },

  {
   
    file: "/songs/ana.mp3"
  }

];

export default function Constellation() {

  const [playing, setPlaying] = useState(null);

  const audioRef = useRef(null);

const playSong = (song, index) => {

  // إذا ضغط على نفس الأغنية وهي تعمل
  if (playing === index && audioRef.current) {

    audioRef.current.pause();
    audioRef.current.currentTime = 0;

    audioRef.current = null;

    setPlaying(null);

    return;
  }

  // إيقاف أي أغنية سابقة
  if (audioRef.current) {

    audioRef.current.pause();
    audioRef.current.currentTime = 0;

  }

  const audio = new Audio(song.file);

  audio.play();

  audioRef.current = audio;

  setPlaying(index);

  // عند انتهاء الأغنية
  audio.onended = () => {

    setPlaying(null);

    audioRef.current = null;

  };

};

  return (

    <section
  id="music"
  className="soundtrack"
>

      <h2>The Music Of Us</h2>

      <p className="soundtrack-subtitle">
        Every note brings us back to a moment.
      </p>

      <div className="soundtrack-grid">

        {songs.map((song, index) => (

          <motion.div
            key={index}
            className={
              playing === index
                ? "music-star active"
                : "music-star"
            }
            whileHover={{
              scale: 1.1
            }}
            whileTap={{
              scale: 0.95
            }}
            onClick={() => playSong(song, index)}
          >

          <div className="music-note">

           {playing === index ? "⏸" : "♪"}

        </div>

            <h3>{song.title}</h3>

            <p>{song.artist}</p>

          </motion.div>

        ))}

      </div>

    </section>

  );

}