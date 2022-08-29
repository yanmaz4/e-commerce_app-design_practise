import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

//Container
const Container = styled.div`
  width: 100%;
  height: 95vh;
  background: /* linear-gradient(rgba(229, 232, 201, 0.332),rgba(230, 175, 81, 0.356)), */ url("https://tropicgambia.com/wp-content/uploads/2021/07/hero5small3-768x626.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;

`;
//Wrapper
const Wrapper = styled.div`
  padding: 20px;
  width: 50%;
  background-color: #fff;
  ${mobile({height:"88vh"})}
`;
//Title
const Title = styled.h1`
  font-size: 20px;
  font-weight: 600;
`;
//Form
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;
//Input
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;
//Agrement
const Agrement = styled.span`
  font-size: 20px;
  margin: 20px 10px;
`;
//Button
const Button = styled.button`
  width: 40%;
  border: none;
  margin-top: 15px;
  margin-left: 15rem;
  padding: 15px 20px;
  background-color: greenyellow;
  cursor: pointer;
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Create An Account</Title>
        <Form>
          <Input placeholder="Name" />
          <Input placeholder="Last Name" />
          <Input placeholder="Username" />
          <Input placeholder="Email" />
          <Input placeholder="Password" />
          <Input placeholder="Confirm Password" />

          <Agrement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agrement>
          <Button>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
