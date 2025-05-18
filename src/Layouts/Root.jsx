import React from "react";
import { Outlet, useMatch } from "react-router-dom";
import Header from "../Components/Shared/Header/Header";
import Banner from "../Components/Banner/Banner";
import Footer from "../Components/Shared/Footer/Footer";

export default function Root() {
  const isHome = useMatch({ path: "/", end: true });

  return (
    <>
      {isHome ? (
        <div className="banner__section">
          <Header />
          <Banner />
        </div>
      ) : (
        <Header />
      )}

      <Outlet />
      <Footer />
    </>
  );
}