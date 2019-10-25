
/* eslint-disable no-unused-vars */
import React from "react";

import Header from "./Header.jsx";
import Navigation from "./Navigation.jsx";
import Main from "./Main.jsx";
import Footer from "./Footer.jsx";

const AppContainer = () => {
  return (
    <article className="app-container">
      <Header/>
      <Navigation/>
      <Main/>
      <Footer/>
    </article>
  );
};

export default AppContainer;
