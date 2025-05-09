import { useContext } from 'react'
import { SearchContext } from '../App'
import styled from 'styled-components'

export default function Search() {
    const StyledForm = styled.form`
        background: #fff2;
        border-radius: 5px;
        color: #fff;
        display: flex;
    `

    const StyledInput = styled.input`
        background: transparent;
        border: none;
        color: currentColor;
        padding: 10px 13px;
        width: 220px;

        &::placeholder {
            color: #ccc;
        }

        &:focus {
            outline: none;
        }
        
        @media (max-width:799px) {
            text-align: center;
        }
    `

    const StyledButton = styled.button`
        align-items: center;
        background: transparent;
        border: none;
        color: currentColor;
        cursor: pointer;
        display: flex;
        padding-inline: 10px;
    `

    const { search, setSearch } = useContext(SearchContext)

    return (
        <StyledForm>
            <StyledInput
                type="text"
                placeholder="Search for movies..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <StyledButton>
                <svg xmlns="http://www.w3.org/2000/svg" height="22px" version="1.1" viewBox="0 0 48 48" width="22px">
                    <g fill="none" fillRule="evenodd" id="Page-1" stroke="none" strokeWidth="1">
                    <g id="Artboard-Copy" transform="translate(-167.000000, -489.000000)">
                        <path d="M184.454197,515.603507 C182.909754,513.465329 181.9996,510.838936 181.9996,508.0004 C181.9996,500.820855 187.820319,495.0004 195.000191,495.0004 C202.180063,495.0004 207.9996,500.820855 207.9996,508.0004 C207.9996,515.178764 202.180063,521.0004 195.000191,521.0004 C192.469289,521.0004 190.10727,520.277027 188.109552,519.025845 L179.9746,528.1274 C178.8486,529.2554 177.0376,529.2914 175.8706,528.2284 L175.8216,528.1794 L175.7726,528.1274 C174.7096,526.9634 174.7436,525.1524 175.8706,524.0254 L184.454197,515.603507 Z M185.0006,508.0004 C185.0006,502.4779 189.4781,498.0004 195.0006,498.0004 C200.5231,498.0004 205.0006,502.4779 205.0006,508.0004 C205.0006,513.5229 200.5231,518.0004 195.0006,518.0004 C189.4781,518.0004 185.0006,513.5229 185.0006,508.0004 L185.0006,508.0004 Z" fill="currentColor" id="search"/>
                        <g id="slices" transform="translate(47.000000, 9.000000)"/></g>
                    </g>
                </svg>
            </StyledButton>
        </StyledForm>
    )
}