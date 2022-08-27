import { Send } from '@mui/icons-material'
import styled from 'styled-components'
import React from 'react'

//Container
const Container = styled.div` height: 60vh;background-color: #fff ;display: flex; align-items: center;justify-content: center; flex-direction: column;`
//Title
const Title = styled.h1`font-size: 70px;margin-bottom: 20px; `
//Description
const Description = styled.div`font-size: 2px;font-weight: 300;margin-bottom: 20px; `
//InputContainer
const InputContainer = styled.div`width: 50%; height: 40px;background-color: #fff; display: flex; justify-content: space-between;border:none;  `
//Input
const Input = styled.input`flex:8; padding-left: 20px; border: 1px solid black; margin-right:5px`
//Button
const Button = styled.button` flex:1; background-color:lightcyan; color: orange ; border: 2px solid blue;`


const Newsletter = () => {
  return (
    <Container>
<Title>NEWSLETTER</Title>
<Description>Get Updates From Your Favorite Products</Description>
<InputContainer>
<Input placeholder='Your Email'/>
<Button>
  <Send/>  
</Button>
</InputContainer>
    </Container>
  )
}

export default Newsletter