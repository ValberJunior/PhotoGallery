import { ThemeProvider } from "styled-components";
import { Reset } from "styled-reset";
import { PhotoProvider } from "./context";
import { Home } from "./pages";
import theme from './theme';



function App() {
  return (
    <ThemeProvider theme={theme}>
      <Reset/>
      <PhotoProvider>
        <Home/>
      </PhotoProvider>
    </ThemeProvider>
  );
}

export default App;
