import { useEffect, useState } from "react";

const sections = [

  {
    id: "hero",
    label: "Hero"
  },

  {
    id: "universe",
    label: "Universe"
  },

  {
    id: "counter",
    label: "Journey"
  },

  {
    id: "music",
    label: "Music"
  },

  {
    id: "memories",
    label: "Memories"
  },


    {
    id: "gallery",
    label: "Gallery"
  },

  {
    id: "letter",
    label: "Letter"
  }



];

export default function LunarTimeline() {

  const [active, setActive] =
    useState("hero");

  useEffect(() => {

    const handleScroll = () => {

      sections.forEach(section => {

        const element =
          document.getElementById(
            section.id
          );

        if (!element) return;

        const rect =
          element.getBoundingClientRect();

        if (
          rect.top <= 200 &&
          rect.bottom >= 200
        ) {

          setActive(section.id);

        }

      });

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

    <div className="lunar-timeline">

      <div className="timeline-moon">
        🌙
      </div>

      <div className="timeline-line"></div>
{sections.map((section) => (

  <div
    key={section.id}
    className="timeline-item"
    onClick={() =>
      scrollToSection(section.id)
    }
  >

    <div
      className={
        active === section.id
          ? "timeline-star active"
          : "timeline-star"
      }
    >
      ✦
    </div>

    <span>
      {section.label}
    </span>

  </div>

))}
    </div>

  );

}