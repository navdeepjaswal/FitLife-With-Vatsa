import { Mail, Instagram } from "lucide-react";
import "./GetInTouch.scss";
import SubtitleList from "./SubtitleList";
import Title from "../../Components/Shared/Title/Title";

const lines = [
  "Battling negative body image and low confidence?",
  "Overwhelmed by mixed nutrition and workout tips?",
  "Feeling stuck and guilty after a cheat?"
];

const GetInTouch = () => {
  return (
    <section id="get-in-touch" className="get-in-touch text-center py-20 px-4">
      <Title sortTitle={"Ready to Transform?"} />

      <div
        data-aos="fade-down"
        data-aos-duration="1000"
        className="mt-6 max-w-2xl mx-auto"
      >
        <SubtitleList items={lines} />

        <a
          href="https://flv.wufoo.com/forms/z1rtnsgc0tyg9c5/"
          target="_blank"
          rel="noopener noreferrer"
          className="transform-btn fw-500 align-items-center gap-2"
        >
          Transform Today
        </a>
      </div>

      <span className="divider"></span>

      <div className="social-container">
         <a
              href="https://www.instagram.com/fitlifewithvatsa"
              target="_blank"
              rel="noopener noreferrer"
              className="icon transition"
            >
        <button className="social-button">
          <p className="social-text">Reach out on Instagram </p>
          <Instagram size={28} />
        </button>
        </a>
      </div>
    </section>
  );
};

export default GetInTouch;
