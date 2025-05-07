import styled from 'styled-components'

const StyledMain = styled.main`
    align-items: center;
    display: flex;
    justify-content: center;
`

const StyledH1 = styled.h1`
    font-size: 26px;

    @media (min-width:1024px) {
        font-size: 40px;
    }
`

export default function NotFound() {
    return (
        <>
            <StyledMain>
                <section>
                    <StyledH1>404 - Page Not Found :-(</StyledH1>
                </section>
            </StyledMain>
        </>
    )
}