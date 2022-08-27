import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from "@mui/icons-material"
import styled from "styled-components"


//Container
const Container= styled.div`flex:1; justify-content: space-between;align-items: center;display: flex;
justify-content:space-between; background-color:lightsteelblue `

//Left
const Left= styled.div`flex: 1; padding: 20px;font-size: 20px;cursor: pointer; `

//Logo
const Logo= styled.h1`display: flex;justify-content: center; margin-left: 20px;`

//Desc
const Desc= styled.p` margin: 20px; font-size: 20px;`


//Center
const Center= styled.div`flex: 1;padding: 20px; display: flex; justify-content: center; margin-left: 20px; flex-direction:column;cursor: pointer;`

//Title
const Title= styled.h1` margin-bottom: 30px; margin-left: 80px;`

//List
const List= styled.ul`margin: 0;padding: 0;list-style:none; display: flex;flex-wrap:wrap;`

//ListItem
const ListItem= styled.li` width: 50%;margin-bottom: 10px; font-size: 20px;`


//Right
const Right= styled.div`flex: 1; padding: 20px;font-size: 20px;cursor: pointer;`

//SocialContainer
const SocialContainer= styled.div`display: flex;`

//SocialIcons
const SocialIcons = styled.div`width: 40px;height: 40px;border-radius: 50%;color:white;
background-color: #${props=>props.color}; display: flex; justify-content: center;align-items: center;margin-right:20px`

//ContactItem
const ContactItem= styled.div`display: flex; margin-bottom: 20px; align-items: center;`
//Payment
const Payment= styled.img`width: 50%;`


const Footer = () => {
  return (
    <Container>
    
        <Left>
<Logo>Logo</Logo>
<Desc>
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus expedita tenetur eum quod officiis dolores natus nemo laboriosam omnis pariatur rerum eos culpa distinctio maiores nihil ex harum eaque, nam magni illo rem? Saepe dolorum labore veritatis consectetur quod libero. Perspiciatis, sapiente! 
</Desc>
<SocialContainer>
    <SocialIcons color="3B5999 " >
        <Facebook/>
    </SocialIcons>
    <SocialIcons color="E4405F "> 
        <Instagram/>
    </SocialIcons>
    <SocialIcons color="55ACEE " >
        <Twitter/>
    </SocialIcons>
    <SocialIcons color=" E60023"> 
        <Pinterest/>
    </SocialIcons>
</SocialContainer>
        </Left>

        <Center>
        <Title>Useful Links</Title>
        <List>
           <ListItem>Home</ListItem>
           <ListItem>Cart</ListItem>
           <ListItem>Man Fashion</ListItem>
           <ListItem>Woman Fasion</ListItem>
           <ListItem>Accessories</ListItem>
           <ListItem>My Acount</ListItem>
           <ListItem>Order Tracking</ListItem>
           <ListItem>Wishlist</ListItem>
           <ListItem>Wishlist</ListItem>
           <ListItem>Terms</ListItem>
        </List> 
        </Center>

        <Right>
        <Title>Contact</Title>
        <ContactItem><Room style={{marginRight:"10px"}}/> Cologne,Germany</ContactItem>
        <ContactItem><Phone style={{marginRight:"10px"}}/> +4910101010</ContactItem>
        <ContactItem> <MailOutline style={{marginRight:"10px"}}/> yanmaerc@gmail.com</ContactItem>
        <Payment src="http://i.ibb.co/Qfvn4z6/paymant.png"/>
        </Right>
        
        </Container>
  )
}

export default Footer