/* eslint-disable no-unused-vars */

import React from "react";
import { render } from "react-dom";
import { $ } from "./JS/helpers/domUtils";

import { LanguageProvider } from "./JS/contexts/siteLanguageContext.jsx";
import AppContainer from "./JS/components/AppContainer.jsx";

import "./SCSS/style.scss";

const container = $(".js-app-entry");

if (!container) {
  throw new Error("[AppStart]: No container provided!");
}

render(
  <LanguageProvider>
    <AppContainer />
  </LanguageProvider>,
  $(".js-app-entry"));
