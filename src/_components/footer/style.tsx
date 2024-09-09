import styled from "styled-components";


const StyledFooter = styled.footer`
    width: 1221px;
    max-width: 100%;
    margin: auto;
    padding-top: 48px;
    padding-bottom: 48px;
    
    & > div:first-child{
        display: flex;
        width: 100%;
        gap: 140px;
        border-bottom: 2px solid #018762;
        padding-bottom: 48px;

        @media(max-width:1000px){
            flex-wrap: wrap;
            justify-content: center;
        }
    }
`

const StyledLogo = styled.div`
    display: flex;
    flex-direction: column;
    width: 240px;
    & img {
        width: 170px;
        margin-bottom: 56px;
    }
    & ul{
        display: flex;
        gap: 16px;
        font-size: 48px;
        width: 100%;
        justify-content: space-between;
        align-items: center;

        & li {
            list-style: none;
            font-weight: bold;
            width: 48px;
            height: 48px;
            color: #018762;
            cursor: pointer;
        }
    }
`

const StyledListContact = styled.div`
    display: flex;
    gap: 110.5px;
    @media(max-width:1000px){
            flex-wrap: wrap;
            justify-content: center;
    }
`

const StyledListItem = styled.div`

    & > h3 {
        font-size: 18px;
        font-weight: 700;
        margin-bottom: 24px;
        line-height: 27px;
        color: #131313;
    }

    & > ul {
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 8px;
        width: 100%;
        
        & > li{
            font-size: 16px;
            line-height: 24px;
            color: #2d2d2d;
            cursor: pointer;
            & :hover{
                text-decoration: underline;
            }
            
        }
    }

    &:nth-child(1) {
    width: 153px; /* Definir largura específica para o primeiro item */
    }

    &:nth-child(2) {
    width: 157px; /* Definir largura específica para o segundo item */
    }

    &:nth-child(3) {
    width: 205px; /* Definir largura específica para o terceiro item */
    }

    @media(max-width:1000px){
    &:nth-child(1) {
    width: 90%; /* Definir largura específica para o primeiro item */
    }

    &:nth-child(2) {
    width:90%; /* Definir largura específica para o segundo item */
    }

    &:nth-child(3) {
    width: 90%; /* Definir largura específica para o terceiro item */
    }
    }
    
`

const StyledFooterMSG = styled.div`
    font-size: 14px;
    color: #515151;
    display: flex;
    flex-direction: column;
    padding-top: 48px;
    position: relative;
    p:nth-of-type(1) {
    margin-bottom: 8px;
    }

    p:nth-of-type(2) {
    margin-bottom: 24px;
    }
  

    & > span {
        position: absolute;
        right: 0;
        top: 10;
        width: 48px;
        height: 48px;
        border: 2px solid #018762;
        color: #018762;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        box-shadow: 1px 7px 5px #00000052;
    }

    @media(max-width: 1000px){
        display: flex;
        flex-wrap: wrap;
        text-align: center;


        p:nth-of-type(1) {
        display: none;
    }

        p:nth-of-type(2) {
        display: none;
    }

    span{
        display: none;
    }
    }
    
`

export {StyledFooter, StyledLogo, StyledListContact, StyledListItem, StyledFooterMSG}