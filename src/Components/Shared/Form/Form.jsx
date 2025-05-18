import React from "react";
import { ArrowRight } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const Form = ({ isColTwo }) => {
  return (
    <div className="replay__box cmn__bg">
      <h3>Leave a Reply</h3>
      <p>
        Your email address will not be published. Required fields are marked *
      </p>
      <form action="#" className="row g-4">
        <div className={` ${isColTwo ? "col-lg-6" : "col-lg-12"}`}>
          <input type="text" placeholder="Name" />
        </div>
        <div className={` ${isColTwo ? "col-lg-6" : "col-lg-12"}`}>
          <input type="email" placeholder="Eamil" />
        </div>
        <div className="col-lg-12">
          <textarea
            name="comment"
            rows="5"
            placeholder="Write Comments"
          ></textarea>
        </div>
        <Link
          to={""}
          className="d-flex fw-500 cmn--btn align-items-center gap-2"
        >
          <span className="get__text">Submit Comment</span>
          <span>
            <i className=" fz-20">
              {" "}
              <ArrowRight />{" "}
            </i>
          </span>
        </Link>
      </form>
    </div>
  );
};

export default Form;
