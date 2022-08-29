import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './global-styles';
import { theme } from './theme';

type StyledThemeProviderProps = {
  children: React.ReactNode;
};

export const StyledThemeProvider = ({ children }: StyledThemeProviderProps) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};
