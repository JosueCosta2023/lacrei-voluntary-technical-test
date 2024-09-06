import { StyledFooter } from "./style";

const Footer = () => {
    return ( 
        <>
            <StyledFooter>
                <div>
                    <div>
                        <div>log</div>
                        <div>Redes Socias</div>
                    </div>

                    <div>
                        <div>
                            <h3>Lacrei saude</h3>
                            <ul>
                                <li>Quem somos</li>
                                <li>Nosso Proposito</li>
                                <li>Missai Visão Valores</li>
                                <li>Acessibilidade</li>
                            </ul>
                        </div>
                        <div>
                            <h3>Saude</h3>
                            <ul>
                                <li>Buscar atendimento</li>
                                <li>Oferecer atendimento</li>
                                
                            </ul>
                        </div>

                        <div>
                            <h3>Segurança de Privacidade</h3>
                            <ul>
                                <li>Politica de Privacidade</li>
                                <li>Termos de Uso</li>
                                <li>Dioreitos de titular</li>
                            
                            </ul>
                        </div>
                    </div>
                </div>


                <div>
                    <div>
                        <p>A Lacrei Saúde não oferece tratamento medico emergencial. Em caso de emergencia procure o hospital mais proximo </p>
                        <p>Em caso de auxilio psicologico, ligue para 188 (CVV) ou acesse o site <a href="https://cvv.org.br">https://cvv.org.br</a></p>
                        <p>
                            Copyright @ 2023 Lacrei Saúde. Todos os direitos reservados. CNPJ 51.265.351/0001-65
                        </p>
                    </div>
                </div>
            </StyledFooter>
        </>
     );
}
 
export default Footer;
