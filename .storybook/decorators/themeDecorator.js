import React from 'react';
import { ThemeProvider } from "@emotion/react";

import defaultTheme from '../../src/styles/defaultTheme';

const ThemeDecorator = story => (
  <ThemeProvider
    theme={defaultTheme}
  >
    {story()}
  </ThemeProvider>
);

export default ThemeDecorator;
