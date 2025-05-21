import React, { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./Router/Router.jsx";

import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
useEffect(() => {
  const timer = setTimeout(() => {
    AOS.init();
  }, 1500); 

  return () => clearTimeout(timer);
}, []);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
