/* eslint-disable no-unused-vars */

/* Libraries. */
import React from "react";
import { render } from "react-dom";

/* Project libraries. */
import { $ } from "./JS/helpers/domUtils";
/* Project contexts. */
import { LanguageProvider } from "./JS/contexts/siteLanguageContext.jsx";
/* Project entry component. */
import AppContainer from "./JS/components/AppContainer.jsx";

/* United styles. */
import "./SCSS/AppStyle.scss";

const container = $(".js-app-entry");

if (!container) {
  throw new Error("[AppStart]: No container provided!");
}

render(
  <LanguageProvider>
    <AppContainer />
  </LanguageProvider>,
  container);
