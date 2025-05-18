import React from "react";
import manimg from "../../../assets/img/banner/Vatsa-2.webp";
const Preloader = () => {
  return (
    <div className="preloader__vatsa">
      <div className="box text-center">
        <div className="vatsa mb-10">
          <img src={manimg} alt="img" />
        </div>
        <span className="fz-30 fw-600" 
        style={{color:"#edb04d", fontFamily:"'Caveat', sans-serif", fontSize:"40px"}}>
          Fit Life With Vatsa
        </span>
      </div>
    </div>
  );
};

export default Preloader;
