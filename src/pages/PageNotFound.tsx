import { useEffect } from 'react'
import styled from 'styled-components'
    
const StyledH1 = styled.h1`
    font-size: 26px;

    @media (min-width:1024px) {
        font-size: 40px;
    }
`

export default function NotFound() {
    useEffect(() => {
        // Disable scroll
        document.body.style.overflow = 'hidden'

        // Re-enable scroll on unmount
        return () => {
            document.body.style.overflow = ''
        }
    }, [])

    return (
        <div className="not-found">
            <section>
                <StyledH1>404 - Page Not Found :-(</StyledH1>
            </section>
        </div>
    )
}