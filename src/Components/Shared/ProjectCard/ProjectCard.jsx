import React from "react";
import { ArrowUpRight } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const ProjectCard = ({
  image,
  subHeading,
  index,
  openLightbox,
  navigate,
}) => {
  return (
    <div className={`project__item`}>
      <div onClick={() => openLightbox(index)} className="thumb imgc">
        <img src={image} alt="img" />
      </div>
      <div className="content d-flex align-items-center justify-content-between gap-2">
          <h3>{subHeading}</h3>
      </div>
    </div>
  );
};

export default ProjectCard;
