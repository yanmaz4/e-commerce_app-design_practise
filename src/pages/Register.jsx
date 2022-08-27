import { Button } from '@mui/material'
import React from 'react'
import styled from 'styled-components'


//Container
const Container= styled.div` width: 100%;height: 100vh;
background:
 url("https://n4.sdlcdn.com/imgs/a/7/b/Sports-52-Wear-Yellow-Cotton-SDL556197233-3-cf162.jpg");background-repeat:no-repeat; background-size: cover ;`
//Wrapper
const Wrapper = styled.div``
//Title
const Title = styled.div``
//Form
const Form = styled.div``
//Input
const Input = styled.div``
//Agrement
const Agrement = styled.div``



const Register = () => {
  return (
    <Container>
<Wrapper>
<Title>Create An Account</Title>
<Form>
<Input placeholder='Name' />
<Input placeholder='Last Name' />
<Input placeholder='Username' />
<Input placeholder='Email' />
<Input placeholder='Password' />
<Input placeholder='Confirm Password' />
<Agrement>
    By creating an account, I consent to the processing of my personal data in accordance with the <b>PRIVACY POLICY</b>
</Agrement>
<Button>CREATE</Button>

</Form>

</Wrapper>

    </Container>
  )
}

export default Register