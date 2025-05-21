import { Mail, Instagram } from "lucide-react";
import "./GetInTouch.scss";
import Title from "../../Components/Shared/Title/Title";

const GetInTouch = () => {
  return (
    <section className="get-in-touch text-center py-20 px-4">
      <Title sortTitle={"Ready to Transform?"} />

      <div
        data-aos="fade-down"
        data-aos-duration="1000"
        className="mt-6 max-w-2xl mx-auto"
      >
        <p className="subtitle mb-8 text-lg leading-relaxed">
          ━ Battling negative body image and low confidence? <br /><br />
          ━ Overwhelmed by conflicting nutrition advice and workout plans? <br /><br />
          ━ Guilty after indulging and stuck without motivation or progress? <br /><br />
        </p>

        <a
          href="https://flv.wufoo.com/forms/z1rtnsgc0tyg9c5/"
          target="_blank"
          rel="noopener noreferrer"
          className="transform-btn block mx-auto mb-8 bg-red-500 px-8 py-4 rounded-lg shadow-md hover:bg-red-600 transition"
        >
          Transform Today
        </a>

         <div className="icons flex justify-center gap-6 mt-8">
          <a
            href="https://www.instagram.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="icon hover:text-red-500 transition"
          >
            <Instagram size={28} />
          </a>
          <a
            href="mailto:youremail@example.com"
            className="icon hover:text-red-500 transition"
          >
            <Mail size={28} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
