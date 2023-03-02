import { CustomThemeProvider } from "./hooks/useTheme";
import Home from "./pages/Home/Home";
import GlobalStyle from "./styles/global";

function App() {
  return (
    <CustomThemeProvider>
      <GlobalStyle />
      <Home />
    </CustomThemeProvider>
  );
}

export default App;
