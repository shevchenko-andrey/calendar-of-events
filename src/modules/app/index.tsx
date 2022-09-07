import * as theme from "../theme";
import { ThemeProvider } from "styled-components";
import { setDefaultOptions } from "date-fns";
import HomeContainer from "../home";

setDefaultOptions({ weekStartsOn: 1 });

const AppContainer = () => {
  return (
    <ThemeProvider theme={theme}>
      <HomeContainer />
    </ThemeProvider>
  );
};
export default AppContainer;
