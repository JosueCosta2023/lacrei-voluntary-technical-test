import  { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        padding:0px;
        margin:0px;
        box-sizing:border-box;
    }

    html {
        scroll-behavior:smoth;
        font:500 16px 'Reboto Slab', sans;
        color: #333;
    }
`



export default GlobalStyle