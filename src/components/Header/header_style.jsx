import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: sans-serif;
    }

`;

export const Header = styled.header`
    //border: solid 2px red;
    display: flex;
    justify-content: space-between;
    margin: 2vh;

    section{
        display: flex;
    }
    div{
        display: flex;
        align-items: center;
        margin: 10px;
        //border: solid 2px blue;
    }
`;

