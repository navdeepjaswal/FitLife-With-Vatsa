import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {
  Facebook,
  Twitter,
  Linkedin,
  Globe,
  Instagram,
  PlayFill,
} from "react-bootstrap-icons";

import bannerMan from "../../assets/img/banner/Vatsa.webp";
import scrollDown from "../../assets/img/banner/scroll-down.png";
import dial from "../../assets/img/banner/dial.png";
import VideoPlay from "../Shared/VideoPlay/VideoPlay";

const socalIcon = [
  {
    id: 1,
    icon: <Facebook />,
  },
  {
    id: 2,
    icon: <Twitter />,
  },
  {
    id: 3,
    icon: <Linkedin />,
  },
  {
    id: 4,
    icon: <Globe />,
  },
  {
    id: 5,
    icon: <Instagram />,
  },
];
const Banner = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
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
