import ReactDOM from 'react-dom/client';
import { Heading } from './components/Heading';
import { StyledThemeProvider } from './styles/styled-theme-provider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <StyledThemeProvider>
    <Heading>Heading</Heading>
  </StyledThemeProvider>,
);
