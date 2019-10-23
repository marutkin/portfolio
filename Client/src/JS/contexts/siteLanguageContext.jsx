
import React from "react";
import PropTypes from "prop-types";

import dictionary from "../dictionaries/basicDictionary";

// Context is made up of two things
// Provider - Single as close to top level as possible
// Consumer - Multiple have multiple consumers
export const LanguageContext = React.createContext();

export class LanguageProvider extends React.Component {
  constructor() {
    super();
    this.state = {
      language: dictionary.en
    };
    this.handleThemeChange = (key) => {
      const language = dictionary[key];
      this.setState({ language });
    };
  }

  render() {
    return (
      <LanguageContext.Provider
        value={{
          language: this.state.language,
          handleThemeChange: this.handleThemeChange
        }}
      >
        {this.props.children}
      </LanguageContext.Provider>
    );
  }
}

LanguageProvider.propTypes = {
  children: PropTypes.any
};
