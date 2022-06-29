import styled, { createGlobalStyle } from "styled-components";
import { MENU_HEIGHT } from "./constants/styles";

export const GlobalStyle = createGlobalStyle`
    *, ::after, ::before {
        box-sizing: border-box;
    }
    body {
        margin: 0;
        padding: 0;
        font-family: "Lato";
    }
`;

export const PageTitle = styled.h1`
    font-size: 2.8em;
    color: #222;
    font-weight: 300;
`;

export const SubTitle = styled.p`
  color: #c0c2d2;
  font-size: 1em;
  text-transform: capitalize;
  margin: 0;
  margin-top: 3px;
`;

// form styles
export const FormControl = styled.div`
    width: 100%;
    margin: 5px 0;
    border-radius: 6px;
    background-color: #f2f2f2;
    padding: 5px 10px;
    display: flex;
`;

export const FormControlInput = styled.div`
    flex: 1;
    label {
        display: block;
        font-size: 0.95em;
        color: #222;
        font-weight: 500;
    }
    input[type="email"], input[type="password"], input[type="text"] {
        //display: block;
        width: 100%;
        font-size: 1.1em;
        padding: 5px 10px;
        margin: 0px;
        background-color: transparent;
        border: none;
        outline: none;
    }
    span {
        color: red;
        font-size: 0.85em;
    }
`;

export const FormControlAction = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const FooterFixed = styled.footer`
    position: fixed;
    bottom: ${MENU_HEIGHT + 5}px;
    left: 0;
    width: 100%;
`;