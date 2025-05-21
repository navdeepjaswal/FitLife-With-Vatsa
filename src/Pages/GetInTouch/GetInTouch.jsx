import { Mail, Instagram } from "lucide-react";
import "./GetInTouch.scss";
import Title from "../../Components/Shared/Title/Title";

const GetInTouch = () => {
  return (
    <section className="get-in-touch">

        <Title
          sortTitle={"Get in Touch ."}
        />

        <div data-aos="fade-down"  data-aos-duration="1000">
           <p className="subtitle">
        Have questions or want to connect? <br/>
        Reach out to me via Instagram or Email.
      </p>

      <div className="icons">
        <a
          href="https://www.instagram.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="icon"
        >
          <Instagram size={28} />
        </a>
        <a
          href="mailto:youremail@example.com"
          className="icon"
        >
          <Mail size={28} />
        </a>
      </div>

      <a
        href="https://forms.gle/your-google-form-link"
        target="_blank"
        rel="noopener noreferrer"
        className="signup-btn"
      >
        Sign Up
      </a>
        </div>
     
    </section>
  );
};

export default GetInTouch;