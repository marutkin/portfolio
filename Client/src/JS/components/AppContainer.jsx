/* eslint-disable no-unused-vars */
import React from "react";

import Footer from "./Footer.jsx";
import Header from "./Header.jsx";
import Navigation from "./Navigation.jsx";

class AppContainer extends React.Component {
  render() {
    return (
      <article className="app-container">
        <Header/>
        <div className="divider"/>
        <Navigation/>
        <div className="divider"/>
        <Footer/>
      </article>
    );
  }
}

export default AppContainer;
