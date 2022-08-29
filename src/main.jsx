import ReactDOM from "react-dom/client";
import App from "./App";
import { StyledThemeProvider } from "./styles/styled-theme-provider";

const root = ReactDOM.createRoot(document.getElementById({"root"}));

root.render(
  <StyledThemeProvider>
    <App />
  </StyledThemeProvider>
);
