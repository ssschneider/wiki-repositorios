import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'VT323', monospace;
        font-size: 62.5%;
        color: #f1f1f1;
        text-transform: uppercase;

        &::selection {
            background-color: #f1f1f1;
            color: #0e0e0e;
        }
    }

    body {
        background-color: #0e0e0e;
    }
`;
