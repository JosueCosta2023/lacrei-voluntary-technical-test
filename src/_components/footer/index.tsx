import { FaArrowUp, FaFacebookF, FaInstagram, FaLinkedinIn} from "react-icons/fa"
import { TiMail} from "react-icons/ti"
import { StyledFooter, StyledFooterMSG, StyledListContact, StyledListItem, StyledLogo } from "./style";

const Footer = () => {

    const ImageLogoFooter = "/image/logofooter.svg"
    return ( 
        <>
            <StyledFooter>
                <div>
                    <StyledLogo>
                        <img src={ImageLogoFooter} alt="Imagem logo" />
                        <ul>
                            <li>
                                <FaFacebookF size={25}/>
                            </li>
                            <li>
                                <TiMail size={30}/>
                            </li>
                            <li>
                                <FaInstagram size={25}/>
                            </li>
                            <li>
                                <FaLinkedinIn size={25}/>
                            </li>
                        </ul>
                    </StyledLogo>

                    <StyledListContact>
                        <StyledListItem>
                            <h3>Lacrei saúde</h3>
                            <ul>
                                <li>Quem somos</li>
                                <li>Nosso Proposito</li>
                                <li>Missai Visão Valores</li>
                                <li>Acessibilidade</li>
                            </ul>
                        </StyledListItem>

                        <StyledListItem>
                            <h3>Saúde</h3>
                            <ul>
                                <li>Buscar atendimento</li>
                                <li>Oferecer atendimento</li>
                                
                            </ul>
                        </StyledListItem>

                        <StyledListItem>
                            <h3>Segurança de Privacidade</h3>
                            <ul>
                                <li>Politica de Privacidade</li>
                                <li>Termos de Uso</li>
                                <li>Direitos de titular</li>
                            
                            </ul>
                        </StyledListItem>
                    </StyledListContact>
                </div>


                <div>
                    <StyledFooterMSG>
                        <p>A Lacrei Saúde não oferece tratamento medico emergencial. Em caso de emergencia procure o hospital mais proximo </p>

                        <p>Em caso de auxilio psicologico, ligue para 188 (CVV) ou acesse o site <a href="https://cvv.org.br">https://cvv.org.br</a></p>

                        <p>
                            Copyright @ 2023 Lacrei Saúde. Todos os direitos reservados. CNPJ 51.265.351/0001-65
                        </p>
                        
                       <span>
                        <FaArrowUp size={28}/>
                        </span> 
                    </StyledFooterMSG>
                </div>
            </StyledFooter>
        </>
     );
}
 
export default Footer;
