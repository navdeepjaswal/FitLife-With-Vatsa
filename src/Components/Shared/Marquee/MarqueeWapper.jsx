import React from "react";
import Marquee from "react-fast-marquee";


const MarqueeWapper = ({ items, direction }) => {
  return (
    <div className="marquee-wrapper text-slider">
      <div className="marquee-inner">
        <Marquee direction={direction}>
          {items?.map(({ id, text }) => (
            <span key={id} className="marquee-text-item">
              {text}
              {'     │'} 
            </span>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default MarqueeWapper;
