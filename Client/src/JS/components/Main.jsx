
import React from "react";

import { $, isInViewport, handleScroll, stopHandleScroll } from "../helpers/domUtils";

// eslint-disable-next-line no-unused-vars
import { LanguageContext } from "../contexts/siteLanguageContext.jsx";

class Main extends React.Component {

  constructor() {
    super();
    this.handleScroll = this.handleScroll.bind(this);
    this.state = { showAside: true };
  }

  componentDidMount() {
    handleScroll(this.handleScroll);
  }

  componentWillUnmount() {
    stopHandleScroll(this.handleScroll);
  }

  handleScroll() {
    this.setState({ showAside: !isInViewport($(".header")) });
  }

  render() {
    return (
      <LanguageContext.Consumer>
        {
          ({ language: { content: { skills, programmLanguages, tools }, aside: { temp }}}) => (
            <main className="main block">
              {
                this.state.showAside &&
                <aside className="block main__aside">
                  {temp}
                </aside>
              }
              <div className="main__container">

                <section className="main__container-section">
                  <h2 className="">{skills}</h2>
                  <div className="">{programmLanguages} &amp; {tools}</div>
                  <ul className="icon-list">
                    <li className="icon-list__item">
                      <i className="fab fa-html5"></i>
                    </li>
                    <li className="icon-list__item">
                      <i className="fab fa-css3-alt"></i>
                    </li>
                    <li className="icon-list__item">
                      <i className="fab fa-js-square"></i>
                    </li>
                    <li className="icon-list__item">
                      <i className="fab fa-react"></i>
                    </li>
                    <li className="icon-list__item">
                      <i className="fab fa-node-js"></i>
                    </li>
                    <li className="icon-list__item">
                      <i className="fab fa-sass"></i>
                    </li>
                    <li className="icon-list__item">
                      <i className="fab fa-gulp"></i>
                    </li>
                    <li className="icon-list__item">
                      <i className="fab fa-npm"></i>
                    </li>
                  </ul>
                </section>

              </div>
            </main>
          )}
      </LanguageContext.Consumer>
    );
  }
}

export default Main;
