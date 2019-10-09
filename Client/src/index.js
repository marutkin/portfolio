
import React from "react";
import ReactDOM from "react-dom";
import './SCSS/style.scss';

class App extends React.Component {
  render() {
    return (
      <main className="main-container">
          Привет, {this.props.name}
      </main>
    );
  }
}

ReactDOM.render(
  <App name="Саша" />,
  document.querySelector(".js-app-entry")
);
