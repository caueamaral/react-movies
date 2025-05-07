import styled from 'styled-components'

const StyledSection = styled.section`
    background: #ccc;
    display: flex;
    justify-content: center;
`

export default function NotFound() {
    return (
        <>
            <main>
                <StyledSection>
                    <h1>404 - Page Not Found</h1>
                </StyledSection>
            </main>
        </>
    )
}