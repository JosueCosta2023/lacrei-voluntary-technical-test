import styled from "styled-components";
import Buttons from "../buttons";
import { StyleHeader, StyleNavBar } from "./style";

const Header = () => {
  const imageLog = "/image/logo.svg";

  return (
    <>
      <StyleHeader>
        <div>
          <a href="https://lacreisaude.com.br/">
            <img src={imageLog} alt="Logo" />
          </a>
        </div>

        <StyleNavBar>
          <ul>
            <li>
              <a href="#">Quem Somos</a>
            </li>
            <li>
              <a href="#">Ajuda</a>
            </li>
          </ul>
          
          <div>
            <Buttons href="#" label="Entrar" newTab={false} />
          </div>

        </StyleNavBar>
      </StyleHeader>
    </>
  );
};


export default Header;
