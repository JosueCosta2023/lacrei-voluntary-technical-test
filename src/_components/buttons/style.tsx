import styled from "styled-components";


const StyledButton = styled.a`
    width: 30%;
    height: 45px;
    text-align: center;
    line-height: 45px;
    background-color: green;
    color: white;
    font-weight: bold;
    border: 2px solid green;
    border-radius: 8px;
    text-decoration: none;
    font-size: 16px;

    &:hover{
        background-color: white;
        color: green;
        border: 2px solid green;
    }
`

export {StyledButton}