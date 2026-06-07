import { useState, useEffect } from "react";

export default function Navbar() {

  const [scrolled, setScrolled] =
    useState(false);

  useEffect(() => {

    const handleScroll = () => {

      setScrolled(
        window.scrollY > 50
      );

    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );

  }, []);

  const scrollToSection = (id) => {

    document
      .getElementById(id)
      ?.scrollIntoView({
        behavior: "smooth"
      });

  };

  return (

    <nav
      className={
        scrolled
          ? "navbar active"
          : "navbar"
      }
    >

      <div className="navbar-logo">

        🌙 Our Universe

      </div>

      <div className="navbar-links">

        <button
          onClick={() =>
            scrollToSection("hero")
          }
        >
          Home
        </button>

        <button
          onClick={() =>
            scrollToSection("universe")
          }
        >
          Universe
        </button>

        <button
          onClick={() =>
            scrollToSection("counter")
          }
        >
          Journey
        </button>

        <button
          onClick={() =>
            scrollToSection("music")
          }
        >
          Music
        </button>

        <button
          onClick={() =>
            scrollToSection("memories")
          }
        >
          Memories
        </button>

        <button
          onClick={() =>
            scrollToSection("letter")
          }
        >
          Letter
        </button>

        <button
          onClick={() =>
            scrollToSection("gallery")
          }
        >
          Gallery
        </button>

      </div>

    </nav>

  );

}