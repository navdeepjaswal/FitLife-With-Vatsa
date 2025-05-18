import React from "react";
import { ArrowUpShort, ArrowRight } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const socalList = [
  {
    id: 1,
    platfrom: "Facebook",
    icon: <ArrowRight />,
  },
  {
    id: 2,
    platfrom: "Instagram",
    icon: <ArrowRight />,
  },
  {
    id: 3,
    platfrom: "Dribble",
    icon: <ArrowRight />,
  },
  {
    id: 4,
    platfrom: "Webflow",
    icon: <ArrowRight />,
  },
];
const Footer = () => {
  return (
    <footer className="footer__section">
      <div className="footer__bottom cmn__bg">
        <div className="container">
          <div className="copyright">
            <p className="white">
              Copyright © 2025 Fit Life With Vatsa
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
