import { StarFill } from "react-bootstrap-icons";

const TestimonialCard = ({ name, position, review, stars }) => {
  return (
    <div className="test__card">
      <div className="rating d-flex mb-3 align-items-center gap-2">
        {Array.from({ length: stars }, (_, i) => (
          <StarFill className="ratting fz-20" key={i} />
        ))}
      </div>
      <p>{review}</p>
      <h4 className="base mb-2">{name}</h4>
    </div>
  );
};

export default TestimonialCard;