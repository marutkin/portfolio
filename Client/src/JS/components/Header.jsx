
import React from "react";

const languageOptions = [ "en", "ru" ];

class Header extends React.Component {

  constructor() {
    super();
    this.state = { language: "en" };
    this.handleSwitchClick = this.handleSwitchClick.bind(this);
  }

  handleSwitchClick(languageKey) {
    this.setState({
      language: languageKey
    });
    this.props.languageSwitchHandler(languageKey);
  }

  render() {
    const { language: { header: {
      title, contactBtn, switchEn, switchRu
    }}} = this.props;
    const [ en, ru ] = languageOptions;
    return (
      <header className="header block">

        <h1 data-title = {this.state.language} className="header__title">
          {title}
        </h1>

        <a className="button button--contact" href="#">
          {contactBtn}
        </a>

        <div className="switch-language">
          <span onClick = {this.handleSwitchClick.bind(this, en)}
            className={`switch-language__option ${this.state.language === en ? "switch-language__option--selected" : ""}`}>
            {switchEn}
          </span>
          <span onClick = {this.handleSwitchClick.bind(this, ru)}
            className={`switch-language__option ${this.state.language === ru ? "switch-language__option--selected" : ""}`}>
            {switchRu}
          </span>
        </div>

      </header>
    );
  }
}

export default Header;
