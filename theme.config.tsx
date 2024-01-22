import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <span>Mivors Apps Archive</span>,
  footer : {
    text : () => <span>Mivors</span>
  }
};

export default config;
