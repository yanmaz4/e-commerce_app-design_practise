import React from "react";
import styled from "styled-components";

//Container
const Container = styled.div`
  width: 100%;
  height: 95vh;
  background: /* linear-gradient(rgba(229, 232, 201, 0.332),rgba(230, 175, 81, 0.356)), */ url("https://i.pinimg.com/736x/ee/57/eb/ee57eb9f299755829c96a522ae8de85d.jpg");
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
`;
//Title
const Title = styled.h1`
  font-size: 20px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  color: green;
`;
//Form
const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
//Input
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 25px;
  padding: 10px;
`;

//Button
const Button = styled.button`
  width: 50%;
  border: none;
  padding: 15px 20px;
  background-color: greenyellow;
  cursor: pointer;
  margin-left: 13rem;
`;
//Link
const Link = styled.a`
  margin: 20px 25px;
  margin-bottom: 10px;
  text-decoration: underline;
  cursor: pointer;
`;

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="Username" />
          <Input placeholder="Password" />

          <Button>LOGIN</Button>
          <Link>FORGOT YOUR PASSWORD?</Link>
          <Link>CREATE AN ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
