import styled, { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Courier New', Courier, monospace;
    }

    body {
        background-color: black;
    }

    .active {
      background-color: green;
    }
`;

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color:	hsl(214, 28%, 15%);
`;

export default GlobalStyle;