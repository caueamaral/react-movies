import { createGlobalStyle, keyframes } from 'styled-components'

const slideIn = keyframes`
    from {
        opacity: 0;
        transform: translateX(100px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
`

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
        background: #222;
        color: #fff;
        font-family: 'Rubik', sans-serif;
        font-size: 16px;
        font-weight: 300;
        min-height: 100%;
    }

    main {
        padding: var(--mainPadding);
        margin-inline: auto;
        max-width: 1500px; 

        @media (max-width:767px) {
            min-height: calc(100dvh - var(--headerHeightMobile) - (var(--mainPadding) * 2));
        }

        @media (min-width:768px) {
            min-height: calc(100vh - var(--headerHeightDesktop) - (var(--mainPadding) * 2));
        }
    }

    .not-found {
        align-items: center;
        display: flex;
        justify-content: center;
    }

    @media (max-width:767px) {
        .not-found {
            min-height: calc(100dvh - var(--headerHeightMobile) - (var(--mainPadding) * 2));
        }
    }

    @media (min-width:768px) {
        .not-found {
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

export { slideIn }