import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { List, ArrowRight } from "react-bootstrap-icons";
import logo from "../../../assets/img/logo/logo.png";

const menuList = [
  {
    id: 1,
    path: "/",
    section: "#home",
    name: "Home",
  },
  {
    id: 2,
    path: "/",
    section: "#about-me",
    name: "About",
  },
  {
    id: 3,
    path: "/",
    section: "#client-transformations",
    name: "Transformations",
  },
  {
    id: 4,
    path: "/",
    section: "#client-testimonials",
    name: "Testimonials",
  },
  {
    id: 5,
    path: "/",
    section: "#get-in-touch",
    name: "Contact Me",
  },
];

const Header = () => {
  const [isSidebarActive, setIsSidebarActive] = useState(false);
  const [menuActive, setMenuActive] = useState(false);
  const [dropDownId, setDropDownId] = useState(null);

  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  }, []);

  const isSticky = (e) => {
    const header = document.querySelector(".header-section");
    const scrollTop = window.scrollY;

    scrollTop >= 35
      ? header.classList.add("menu-fixed", "animated", "fadeInDown")
      : header.classList.remove("menu-fixed");
  };

  const handleHeaderToggle = () => {
    setMenuActive(!menuActive);
  };

  const handleSubMenu = (id) => {
    setDropDownId(id);
  };

  return (
    <header className={`header-section `}>
      <div className="container"
        data-aos="fade-down"
        data-aos-duration="1000"
      >
        <div className="header-wrapper">
          <div className="main__logo">
            <Link to={"/"} className="logo">
              <img className="logo" src={logo} alt="logo" />
            </Link>
          </div>
          <ul className={`main-menu ${menuActive ? "active" : ""}`}>
            {menuList.map(({ id, name, path, dropDown, section }) => {
              return (
                <li key={id} onClick={() => handleSubMenu(id)}>
                  <HashLink smooth to={`${path}${section ? section : ""}`}>
                    {name}
                  </HashLink>
                  {dropDown?.length && (
                    <ul className={`sub-menu ${dropDownId === id ? "sub-menu_active" : ""}`}>
                      {dropDown.map(({ id, name, path }) => {
                        return (
                          <li key={id}>
                            <HashLink smooth to={path}>
                              {name}
                            </HashLink>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
          <div className="menu__components d-flex align-items-center">
            <a
              href="https://flv.wufoo.com/forms/z1rtnsgc0tyg9c5/"
              target="_blank"
              rel="noopener noreferrer"
              className="letsTalkBtn d-flex fw-500 cmn--btn align-items-center gap-2"
            >
              <span className="get__text">Let's Talk</span>
              <span>
                <ArrowRight className="fz-20" />
              </span>
            </a>
            <div
              onClick={handleHeaderToggle}
              className={`header-bar d-lg-none ${menuActive ? "active" : ""}`}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
