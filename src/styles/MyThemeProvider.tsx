import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './global-styles';
import { theme } from './theme';

type MyThemeProviderProps ={
  children: React.ReactNode
}

export const MyThemeProvider = ({ children }:MyThemeProviderProps) => {
  return (
    <ThemeProvider theme={theme}>
      {children}
      <GlobalStyles />
    </ThemeProvider>
  );
};

