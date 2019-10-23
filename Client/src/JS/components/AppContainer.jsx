
/* eslint-disable no-unused-vars */
import React from "react";

import Header from "./Header.jsx";
import Navigation from "./Navigation.jsx";
import Main from "./Main.jsx";
import Footer from "./Footer.jsx";

import { LanguageContext } from "../contexts/siteLanguageContext.jsx";

const AppContainer = () => {
  return (
    <LanguageContext.Consumer>
      {
        ({ language, handleThemeChange }) => (
          <article className="app-container">
            <Header language = {language} languageSwitchHandler = {handleThemeChange} />
            <Navigation language = {language} />
            <Main language = {language} />
            <Footer language = {language} />
          </article>
        )
      }
    </LanguageContext.Consumer>
  );
};

export default AppContainer;
