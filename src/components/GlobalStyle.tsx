import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root {
        --headerHeightMobile: 120px;
        --headerHeightDesktop: 80px;
        --mainPadding: 30px;
    }

    html,
    body,
    #root {
        height: 100%;
    }

    body {
        font-family: 'Rubik', sans-serif;
        min-height: 100%;
    }

    main {
        padding: var(--mainPadding);
        margin-inline: auto;
        max-width: 1500px; 

        @media (max-width:799px) {
            min-height: calc(100dvh - var(--headerHeightMobile) - (var(--mainPadding) * 2));
        }

        @media (min-width:800px) {
            min-height: calc(100vh - var(--headerHeightDesktop) - (var(--mainPadding) * 2));
        }
    }
`