import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root {
        --headerHeight: 80px;
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
        min-height: calc(100vh - var(--headerHeight) - (var(--mainPadding) * 2));
    }
`