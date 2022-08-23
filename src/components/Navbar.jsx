import SearchIcon from '@mui/icons-material/Search';
import { Badge } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
height:80px;
`

const Wrapper = styled.div`
padding: 10px 20px;
display: flex;
justify-content:space-between;
`
const Left = styled.div`flex: 1;display: flex;
justify-content: flex-start;
align-items: center;`
const Language = styled.span`font-size:24px; color:red; cursor: pointer;`
const SearchContainer = styled.span`
border: none;
display: flex;
justify-content: flex-start;
align-items: center;
margin-left: 15px;

`
const Input = styled.input`border:1px solid lightgray;`

const Center = styled.div`flex: 1;
text-align:center`
const Logo = styled.h1` font-weight: bold; display: flex;
justify-content: flex-start;
align-items: center;`
const Right = styled.div`flex: 1; display:flex; align-items: center; justify-content:flex-end`

const MenuItem = styled.div` font-size:14px; cursor: pointer; margin-left:35px;`


const Navbar = () => {
  return (
    <Container>
<Wrapper>
    <Left>
       
        <SearchContainer>
        <Language>EN</Language>
        <Input style={{color:"grey", fontSize:16, height:30, width:200, paddingLeft:20}}/>
        <SearchIcon style={{color:"grey", fontSize:16, height:30, width:30}}/>
        </SearchContainer>
    </Left>

    <Center>
    <Logo>Logo</Logo>
    </Center>

    <Right style={{marginRight:30}}>
    <MenuItem>REGISTER</MenuItem>
    <MenuItem>SIGN IN</MenuItem>
    <MenuItem><Badge badgeContent={1} color="success"> 
      <ShoppingCartOutlinedIcon/>
    </Badge>
    </MenuItem>
    </Right>

</Wrapper>

    </Container>
  )
}

export default Navbar