import styled from "styled-components";
import Buttons from "../buttons";
import { StyleHeader, StyleNavBar, StyleNavBarMobile } from "./style";
import { FaQuestion, FaUser, FaUserClock } from "react-icons/fa";

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

        <StyleNavBarMobile>
          <ul>
            <li>
              <a href="">
                <FaQuestion/>
              </a>
            </li>

            <li>
              <a href="">
                <FaUser/>
              </a>
            </li>
          </ul>
        </StyleNavBarMobile>

      </StyleHeader>
    </>
  );
};


export default Header;
