import React from "react";
import { StarFill } from "react-bootstrap-icons";
import testiArrow from "../../assets/img/testimonial/testi-arrow.png";
import logo from "../../assets/img/logo/logo.png";
import Title from "../Shared/Title/Title";
import TestimonialCard from "./TestimonialCard";

const reviewList = [
  {
    id: 1,
    name: "- Anjanaa",
    review: `"Training with Vatsa transformed my habits and mindset. His constant support and focus on effort over the scale helped me 
    build lasting habits. I’m now at my fittest—and it feels effortless."`,
    stars: 5,
  },
  {
    id: 2,
    name: "- Ujwala",
    review: `"Training with Vatsa taught me balance. Lost 10kg, gained muscle, 
    and built lasting habits—all while enjoying delicious vegetarian meals. 
    I feel healthier, stronger, and more energized. Best decision I made!"`,
    stars: 5,
  },
  {
    id: 3,
    name: "- Kunal",
    review: `"Training with Vatsa was the best decision I made this year. 
    His tailored plans, motivation, and expertise helped me stay consistent, get fit, 
    and enjoy the process. Highly recommend him for lasting results!"`,
    stars: 5,
  },
  {
    id: 4,
    name: "- Raghav",
    review: `"Vatsa helped me go from my unhealthiest to fittest self with a sustainable, 
    personalized plan. His support, accountability, and guidance made all the difference. 
    I lost 21 lbs and gained lasting habits."`,
    stars: 5,
  }
];

const Testimonial = () => {
  return (
    <section className="testimonial__section pt-120 pb-120" id="testimonial">
      <div className="container">
        <div className="project__head text-center">
          <Title
            data-aos="fade-up"
            data-aos-duration="1000"
            sortTitle={"Testimonials"}
          />
        </div>
        <div
          className="testimonial__v1wrap"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="test__shape">
            <img src={testiArrow} style={{ width: "100px" }} alt="img" />
          </div>
          <div className="row justify-content-center">
            <div className="grid">
              {reviewList.map((review) => (
                <TestimonialCard key={review.id} {...review} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
