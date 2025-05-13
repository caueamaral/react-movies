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

    .cards {
        display: grid;
        gap: 20px;
    }

    @media (max-width: 767px) {
        .cards {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    @media (min-width: 768px) and (max-width: 1023px) {
        .cards {
            grid-template-columns: repeat(4, 1fr);
        }
    }

    @media (min-width: 1024px) {
        .cards {
            grid-template-columns: repeat(6, 1fr);
        }
    }
`