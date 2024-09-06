import styled from "styled-components";


const StyledButton = styled.a`
    min-width: 100%;
    height: 100%;
    text-align: center;
    background-color: green;
    color: white;
    font-weight: bold;
    border: 2px solid green;
    border-radius: 8px;
    text-decoration: none;
    font-size: 16px;
    line-height: 45px;

    &:hover{
        background-color: white;
        color: green;
        border: 2px solid green;
    }
`

export {StyledButton}