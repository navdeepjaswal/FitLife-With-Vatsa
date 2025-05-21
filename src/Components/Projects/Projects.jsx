import React, { useEffect, useState } from "react";
import Title from "../Shared/Title/Title";
import Lightbox from "../Shared/LightBox/LightBox";
import ProjectCard from "../Shared/ProjectCard/ProjectCard";
import { imagesList, projectList } from "../../Utlits/projectList";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Projects = () => {
  const [currentId, setCurrentId] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(4);

  const openLightbox = (index) => {
    setCurrentId(index);
    setLightboxOpen(true);
  };

  const handleToggle = () => {
    setVisibleCount((prev) => (prev === 4 ? 6 : 4));
  };

  return (
    <section className="project__section pt-120 pb-120" id="projects">
      <div className="container">
        <Title sortTitle={"Client Transformations"} size="3rem" />

        
        <AnimatePresence initial={false}>
          <motion.div
            key={visibleCount}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 1, ease: "anticipate" }}
          >
            <div className="project__wrapone"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              {projectList.slice(0, visibleCount).map(({ id, image, subHeading }, index) => (
                <ProjectCard
                  key={id}
                  image={image}
                  subHeading={subHeading}
                  openLightbox={openLightbox}
                  index={index}
                />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {projectList.length > 4 && (
          <div className="text-center mt-4">
            <button onClick={handleToggle} className="collapse-btn white">
              {visibleCount === 4 ? "Load More ↓" : "Show Less ↑"}
            </button>
          </div>
        )}
      </div>

      {lightboxOpen && (
        <Lightbox
          images={imagesList}
          setLightboxOpen={setLightboxOpen}
          currentId={currentId}
        />
      )}
    </section>
  );
};


export default Projects;
