import { render } from 'react-dom';


type renderThemeProps ={
  children: React.ReactNode
}

export const renderTheme = ({children}:renderThemeProps) => {
  return render(<MyThemeProvider>{children}</MyThemeProvider>);
};
