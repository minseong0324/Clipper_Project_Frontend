// styles.ts
import { createGlobalStyle } from 'styled-components';
import bodyBackground from './assets/sky/sky7.png';
import bodyAfterBackground from './assets/background/background17.png';

export const GlobalStyle = createGlobalStyle`
    html, body {
        margin: 0;
        padding: 0;
        height: 100vh;
        overflow: hidden;
        background: url(${bodyBackground});
        background-size: auto;
        background-position: center center;
        background-repeat: no-repeat;
        
    }

    body::after {
        content: "";
        position: absolute;
        top: 65px;
        left: 0px;
        height: 100%;
        width: 100%;
        background: url(${bodyAfterBackground});
        background-size: auto;
        background-position: center center;
        background-repeat: no-repeat;
        z-index: 1;
    }

    #content {
        position: relative;
        height: 100%;
        overflow: auto;
        z-index: 1;
    }
`;