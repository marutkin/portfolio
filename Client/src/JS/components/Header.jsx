import React from "react";

import data from "../helpers/dataProvider";

class Header extends React.Component {
  render() {
    return (
      <header className="header block">
        <h1 className="header__title">
          {data.header.title}
        </h1>
        <a class="button button--contact" href="#">
          {data.header.contactBtn}
        </a>
      </header>
    );
  }
}

export default Header;
