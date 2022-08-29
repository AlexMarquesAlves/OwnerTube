import { render } from '@testing-library/react';
import {
  JSXElementConstructor,
  ReactElement,
  ReactFragment,
  ReactPortal,
} from 'react';
import { StyledThemeProvider } from './styled-theme-provider';

export const renderTheme = (
  children:
    | string
    | number
    | boolean
    | ReactElement<any, string | JSXElementConstructor<any>>
    | ReactFragment
    | ReactPortal
    | null
    | undefined,
) => {
  return render(<StyledThemeProvider>{children}</StyledThemeProvider>);
};
