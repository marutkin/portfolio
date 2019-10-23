
import React from "react";
import PropTypes from "prop-types";

import dictionaryEn from "../dictionaries/basicDictionaryEn";
import dictionaryRu from "../dictionaries/basicDictionaryRu";

const DICTIONARY = {
  en: dictionaryEn,
  ru: dictionaryRu
};

export const LanguageContext = React.createContext();

export class LanguageProvider extends React.Component {
  constructor() {
    super();
    this.state = {
      language: DICTIONARY.en
    };
    this.handleThemeChange = (key) => {
      const language = DICTIONARY[key];
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
