// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    COLORS: {
      white: string;
      blueGreen: string;
      blue: string;
      green: string;
      black: string;
      primary: string;
      secondary: string;
      btnBackground: string;
      bthBackgroundHover: string;
    };

    SPACES: {
      l: string;
      m: string;
      s: string;
      s7: string;
    };

    FONTS: {
      SIZES: {
        l: string;
        m: string;
        s: string;
      };

      FAMILIES: {
        normal: string;
      };

      WEIGHTS: {
        bold: string;
        normal: string;
      };
    };
  }
}
