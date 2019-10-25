
import React from "react";

// eslint-disable-next-line no-unused-vars
import { LanguageContext } from "../contexts/siteLanguageContext.jsx";

const languageOptions = [ "en", "ru" ];

class Header extends React.Component {

  constructor() {
    super();
    this.state = { language: "en" };
    this.handleSwitchClick = this.handleSwitchClick.bind(this);
  }

  handleSwitchClick(languageKey, callBack) {
    this.setState({ language: languageKey });
    callBack(languageKey);
  }

  render() {
    const [ en, ru ] = languageOptions;
    const { language: stateLanguage } = this.state;
    return (
      <LanguageContext.Consumer>
        {
          ({ language: { header: { title, contactBtn, switchEn, switchRu }}, handleThemeChange }) => (

            <header className="header block">

              <h1 data-title = {stateLanguage} className="header__title">
                {title}
              </h1>

              <button className="button button--contact button--only-desktop" href="#">
                {contactBtn}
              </button>

              <button className="button button--border button--only-mobile mix-margin">
                {contactBtn}
              </button>

              <article className="switch-language">
                <span onClick = {this.handleSwitchClick.bind(this, en, handleThemeChange)}
                  className={`switch-language__option ${stateLanguage !== en || "switch-language__option--selected"}`}>
                  {switchEn}
                </span>
                <span onClick = {this.handleSwitchClick.bind(this, ru, handleThemeChange)}
                  className={`switch-language__option ${stateLanguage !== ru || "switch-language__option--selected"}`}>
                  {switchRu}
                </span>
              </article>

            </header>

          )}
      </LanguageContext.Consumer>
    );
  }
}

export default Header;
