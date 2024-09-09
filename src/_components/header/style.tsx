import styled from "styled-components";


const StyleHeader = styled.header`
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 30px 162px ;
    background: linear-gradient(to bottom, #f5fffb, #ffffff);
    flex-wrap: wrap;

    & div {
        
        & a {
            display: inline-block;
            & img {
                width: 100%;
                height: 100%;
            }
        }
    }

    @media(max-width: 450px){
        margin-top: 50px;
        padding:0px;
        justify-content: center;
        align-items: center;
        
    }

    @media(max-width:768px){
        gap: 26px;
        justify-content: center;
    }

    `

const StyleNavBar = styled.nav`
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

   

    @media(max-width:1000px){
        display: none;
    }
`

const StyleNavBarMobile = styled.nav`
    width: 50%;
    display: none;
    gap: 16px;
    align-items: center;
    justify-content: flex-end;
    & > ul {
        display: flex;
        text-decoration: none;
        gap: 26px;

        & > li:first-child {
            list-style: none;
            a {
                text-decoration: none;
                color: #018762;
                padding: 5px;
                text-align: center;
                border-radius:50%;
                border: 3px solid #007756;
                font-weight: bold;
            }
        }

        & > li:last-child{
            list-style: none;

            & > a {
                padding: 11.5px 32px;
                background-color: #007756;
                border: 2px solid #007756;
                border-radius: 8px;
                color: white;

                &:hover{
                    background-color: white;
                    color: #007756;
                    border: 2px solid #007756;
                }
            }
        }
    }

    @media(max-width:1000px){
        display: flex;
        
    }

`


export {StyleHeader, StyleNavBar, StyleNavBarMobile}