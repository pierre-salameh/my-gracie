import { useEffect, useState } from "react";
import MiniMoon from "./MiniMoon";

export default function LoveCounter() {

  const startDate = new Date(
    "2025-11-18T05:25:00"
  );

  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {

    const timer = setInterval(() => {

      const now = new Date();

      const diff = now - startDate;

      setTime({

        days: Math.floor(
          diff / (1000 * 60 * 60 * 24)
        ),

        hours: Math.floor(
          diff / (1000 * 60 * 60)
        ) % 24,

        minutes: Math.floor(
          diff / (1000 * 60)
        ) % 60,

        seconds: Math.floor(
          diff / 1000
        ) % 60,

      });

    }, 1000);

    return () => clearInterval(timer);

  }, []);

  return (

    <section
  id="counter"
  className="love-counter"
>

      <div className="counter-title">

        <h2>Every Moment Since Then</h2>

        <p>
          18 November 2025
        </p>

      </div>

      <div className="orbit-container">

        <div className="orbit orbit-1">

          <div className="time-node orbit-top">

            <div className="time-fix">

              <div className="time-content">

                <h3>{time.days}</h3>
                <span>Days</span>

              </div>

            </div>

          </div>

          <div className="time-node orbit-right">

            <div className="time-fix">

              <div className="time-content">

                <h3>{time.hours}</h3>
                <span>Hours</span>

              </div>

            </div>

          </div>

          <div className="time-node orbit-bottom">

            <div className="time-fix">

              <div className="time-content">

                <h3>{time.minutes}</h3>
                <span>Minutes</span>

              </div>

            </div>

          </div>

          <div className="time-node orbit-left">

            <div className="time-fix">

              <div className="time-content">

                <h3>{time.seconds}</h3>
                <span>Seconds</span>

              </div>

            </div>

          </div>

        </div>

        <div className="moon-center">

          <div className="moon-glow"></div>

          <div className="moon-core">

            <MiniMoon />

          </div>

          

        </div>

      </div>

    </section>

  );
}