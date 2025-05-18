import React from "react";

const Title = ({ sortTitle}) => {
  return (
    <div className="project__head text-center">
      <span
        className="common__sub"
        data-aos="fade-down"
        data-aos-duration="1000"
      >
        {sortTitle}
      </span>
    </div>
  );
};

export default Title;
