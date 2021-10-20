//variables for dark and light themes
import { createGlobalStyle } from "styled-components";
export const lightTheme = {
  body: "#fff",
  fontColor: "#000",
};

export const darkTheme = {
  body: "#000",
  fontColor: "#fff",
};

//base styling
export const GlobalStyles = createGlobalStyle`

body {
    background-color: ${(props) => props.theme.body}
}`;
