import React, { useEffect, useState } from "react";

import bannerMan from "../../assets/img/banner/Vatsa.webp";

const Banner = () => {
  const [position, setPosition] = useState(false);

  useEffect(() => {
    if (!position) {
      setPosition(true);
    }
  }, []);

  return (
    <section id="home">
      <div className="container">
        <div
          className="banner__content"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h1 className="hone">
            Fit Starts <br />
            <span className="hone-highlight underline"> Here.</span>
          </h1>
        </div>

        <div className={`banner__thumb`}>
          <img className="banner-man" src={bannerMan} alt="man-img" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
