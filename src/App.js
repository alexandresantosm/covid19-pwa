import { StylesProvider } from "@material-ui/styles";
import { CssBaseline } from "@material-ui/core";
import { GlobalStyle } from "./common/styles/global-style";

function App() {
  return (
    <StylesProvider injectFirst>
      <CssBaseline />
      <GlobalStyle />
      <div>Welcome ;)</div>
    </StylesProvider>
  );
}

export default App;
