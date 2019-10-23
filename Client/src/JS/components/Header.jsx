import React from "react";

class Header extends React.Component {

  render() {
    const { language, languageSwitchHandler } = this.props;
    return (
      <header className="header block">
        <h1 className="header__title">
          {this.context.language}
          {language.header.title}
        </h1>
        <div className="switch-language">
          <span onClick = {() => languageSwitchHandler("en")} className="switch-language__option">EN</span>
          <span onClick = {() => languageSwitchHandler("ru")} className="switch-language__option">RU</span>
        </div>
        <a className="button button--contact" href="#">
          {language.header.contactBtn}
        </a>
      </header>
    );
  }
}

export default Header;
