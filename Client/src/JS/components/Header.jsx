import React from "react";

import data from "../helpers/dataProvider";

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <h1 className="elegantshadow">
          {data.header.title}
        </h1>
      </header>
    );
  }
}

export default Header;
