import React, { useEffect, useState } from "react";
import { ScrollRestoration } from "react-router-dom";
import AOS from "aos";           
import "aos/dist/aos.css";

import About from "../Components/About/About";
import Projects from "../Components/Projects/Projects";
import Testimonial from "../Components/Testimonial/Testimonial";
import MarqueeWapper from "../Components/Shared/Marquee/MarqueeWapper";
import Preloader from "../Components/Shared/Preloader/Preloader";
import { images, images2 } from "../Utlits/marqueeItems";
import GetInTouch from "../Pages/GetInTouch/GetInTouch";

const Home = () => {
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    // simulate data load
    const t = setTimeout(() => {
      setIsFetching(false);
    }, 1000);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    // once your preloader unmounts, re‐init & refresh AOS
    if (!isFetching) {
      AOS.init({ once: true });
      AOS.refresh();
    }
  }, [isFetching]);

  return (
    <>
      {isFetching && <Preloader />}

      {!isFetching && (
        <>
          <MarqueeWapper direction="left" items={images} />
          <About />
          <MarqueeWapper direction="right" items={images2} />
          <Projects />
          <Testimonial />
          <GetInTouch />
          <ScrollRestoration />
        </>
      )}
    </>
  );
};

export default Home;