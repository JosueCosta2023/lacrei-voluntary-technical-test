import React from 'react'
import Header from '../_components/header'
import Footer from '../_components/footer'
import Buttons from '../_components/buttons'
import styled from 'styled-components'

const Home = () => {

  const dataButtons = [
    {
      "href":"https://lacreisaude.com.br/quem-somos/",
      "label":"Conheça quem somos nós",
      "newTab":true,
    },
    {
      "href":"https://paciente.lacreisaude.com.br/",
      "label":"Encontre a ajuda",
      "newTab":true,
    },
    {
      "href":"https://profissional.lacreisaude.com.br/",
      "label":"Saiba como ajudar",
      "newTab":true,
    },
  ]


  return (
    <div>
        <Header/>
        <MainContainer>
          {
            dataButtons.map((data, index) => (
              <Buttons key={index} href={data.href} label={data.label} newTab={data.newTab}/>
            ))
          }
        </MainContainer>
        <Footer/>
    </div>
  )
}

export default Home

const MainContainer = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 60vh;
  gap: 20px;

`