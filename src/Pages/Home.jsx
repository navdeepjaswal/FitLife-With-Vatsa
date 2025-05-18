import React, { useEffect, useState } from "react";
import { ScrollRestoration } from "react-router-dom";
import AOS from "aos";            // ← import AOS
import "aos/dist/aos.css";       // ← ensure the styles are in scope

import About from "../Components/About/About";
import Projects from "../Components/Projects/Projects";
import Metting from "../Components/Metting/Metting";
import Services from "../Components/Services/Services";
import WorkeProcess from "../Components/WorkeProcess/WorkeProcess";
import Testimonial from "../Components/Testimonial/Testimonial";
import Blogs from "../Components/Blogs/Blogs";
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
          {/* <Metting /> */}
          {/* <Services isHeading={true} /> */}
          {/* <WorkeProcess /> */}
          <Testimonial />
          {/* <Blogs /> */}
          <GetInTouch />
          <ScrollRestoration />
        </>
      )}
    </>
  );
};

export default Home;