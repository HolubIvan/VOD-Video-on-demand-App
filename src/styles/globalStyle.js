import {createGlobalStyle} from 'styled-components';

const GlobalStyles = createGlobalStyle`
    *,
    *::after,
    *::before {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
    }

    html {
        // This defines what 1rem is
        font-size: 62.5%; //1 rem = 10px; 10px/16px = 62.5%
        font-family: 'Quicksand', sans-serif;
    }

    body {
        box-sizing: border-box;
    }
`;

export default GlobalStyles;