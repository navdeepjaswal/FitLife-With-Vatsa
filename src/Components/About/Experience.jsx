import React from "react";
import personalInfothumb from "../../assets/img/about/personal-infothumb.png"

const Experience = ({isTabActive}) => {
  return (
    <div className={`tabitem ${isTabActive === "experience" ? "active":""} `}>
      <div className="about__v1wrap">
        <div className="row g-4 align-items-lg-start align-items-center">
          <div className="col-lg-5">
            <div className="about__onethumb">
              <img src={personalInfothumb} alt="img" />
            </div>
          </div>
          <div className="col-lg-7">
            <div className="about__onecontent">
              <h2>My Experience</h2>
              <p>
                Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                consectetur, aliquam quaerats voluptatem. Ut enim ad minima
                veniam, exercitationem laboriosam, nisi ut aliquid ex ea autem
                velit esse quam nihil
              </p>
              <div className="exprience__box mt-30">
                <div className="exri__item">
                  <span className="fz-18 fw-500 base">In 2011</span>
                  <div className="expri__cont">
                    <h4 className="mb-15 text-white">Software Engineer</h4>
                    <p className="fz-18 pra d-block">UI Head & Manager</p>
                  </div>
                </div>
                <div className="exri__item">
                  <span className="fz-18 fw-500 base">In 2016</span>
                  <div className="expri__cont">
                    <h4 className="mb-15 text-white">Product Designer</h4>
                    <p className="fz-18 pra d-block">Head of Department</p>
                  </div>
                </div>
                <div className="exri__item">
                  <span className="fz-18 fw-500 base">In 2023</span>
                  <div className="expri__cont">
                    <h4 className="mb-15 text-white">Senior UI Designer</h4>
                    <p className="fz-18 pra d-block">Fiverr.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
