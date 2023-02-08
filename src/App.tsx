import { CustomThemeProvider } from "./hooks/useTheme";
import GlobalStyle from "./styles/global";

function App() {
  return (
    <CustomThemeProvider>
      <GlobalStyle />
      <div>
        oi <h1>oisss</h1>
      </div>
    </CustomThemeProvider>
  );
}

export default App;
