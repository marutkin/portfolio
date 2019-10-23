/* eslint-disable no-unused-vars */
import React from "react";

import Footer from "./Footer.jsx";
import Header from "./Header.jsx";
import Navigation from "./Navigation.jsx";

import { LanguageContext } from "../contexts/siteLanguageContext.jsx";

const AppContainer = () => {
  return (
    <LanguageContext.Consumer>
      {
        ({ language, handleThemeChange }) => (
          <article className="app-container">
            <Header language = {language} languageSwitchHandler = {handleThemeChange} />
            <Navigation/>
            <Footer/>
          </article>
        )
      }
    </LanguageContext.Consumer>
  );
};

export default AppContainer;
