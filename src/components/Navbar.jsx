import SearchIcon from "@mui/icons-material/Search";
import { Badge } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 60px;
  ${mobile({height:"50px",width:"100%" })}
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;
const Left = styled.div`
  flex: 2;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  ${mobile({ padding: "0px 0px" })}
`;
const Language = styled.span`
  font-size: 24px;
  color: red;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;
const SearchContainer = styled.span`
  border: none;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 0px;
  ${mobile({ padding: "10px 5px" })}
`;
const Input = styled.input`
  border: 1px solid lightgray;
  ${mobile({ marginLeft: "0px", width: "50px" })};
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Logo = styled.h1`
  font-weight: bold;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  ${mobile({ fontSize:"20px"})};
`;
const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: "3", justifyContent: "center"})};
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 35px;
  ${mobile({  marginLeft:"10px",fontSize:"10px" })};
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <SearchContainer>
            <Language>EN</Language>
            <Input placeholder="search" />
            <SearchIcon
              style={{ color: "grey", fontSize: 10, height: 20, width: 20 }}
            />
          </SearchContainer>
        </Left>

        <Center>
          <Logo>LOGO</Logo>
        </Center>

        <Right style={{ marginRight: 100 }}>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem>
            <Badge badgeContent={1} color="success">
              <ShoppingCartOutlinedIcon />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
