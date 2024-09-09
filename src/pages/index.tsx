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
    <>
        <Header/>
        <MainContainer>
          {
            dataButtons.map((data, index) => (
              <StyledButtonPersonality key={index}>
                <Buttons href={data.href} label={data.label} newTab={data.newTab}/>
              </StyledButtonPersonality>
            ))
          }
        </MainContainer>
        <Footer/>
    </>
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

const StyledButtonPersonality = styled.div`
  width: 250px;
  max-width: 50%;
  height: 45px;
  display: flex;
`