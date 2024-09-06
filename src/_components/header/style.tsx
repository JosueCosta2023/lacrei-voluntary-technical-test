import styled from "styled-components";


const StyleHeader = styled.header`
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 30px 162px ;
    background: linear-gradient(to bottom, #f5fffb, #ffffff);

    & div {
        
        & a {
            display: inline-block;
            & img {
                width: 100%;
                height: 100%;
            }
        }
    }
    `

const StyleNavBar = styled.nav`
    width: 50%;
    display: flex;
    gap: 16px;
    align-items: center;
    justify-content: flex-end;
    & ul{
        display: flex;
        text-decoration: none;
        gap: 16px;
        & li{
            list-style: none;
            
            & a{
                text-decoration: none;
                color: #018762;
                display: inline-block;
                padding: 11.3px 32px;
                text-align: center;
                border-radius: 8px;
                border: 2px solid #007756;
                font-weight: bold;
                letter-spacing: 2px;
                
                &:hover{
                   background-color: #dff2ed;
                }
            }
        }
    }

    & div {
        width: 117px;
        height: 45px;
    }
`


export {StyleHeader, StyleNavBar}