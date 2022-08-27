import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from "@mui/icons-material"
import styled from "styled-components"
//Info
const Info = styled.div`opacity: 0; width:90%;height:90%; object-fit:cover;position: absolute;top: 0;left: 50;display: flex;z-index: 3; justify-content: center;align-items: center;color:orange; background-color:rgba(0.0.0.0.3); transition: all 0.5s ease; cursor: pointer;`
//Container
const Container = styled.div`flex:1; margin: 10px;padding: 10px; min-width: 280px;min-height: 350px; display: flex;
align-items: center; justify-content: center; background-color: #98d3e7; position: relative;  object-fit:cover; &:hover ${Info}{opacity: 1;}`
//Image
const Image = styled.img`width:100%;height:100%; object-fit:cover; z-index: 1;flex-direction:column;opacity: 0.8; border-radius:20px `
//Circle
const Circle = styled.div` width: 290px;height: 290px;border-radius:50%;background-color: #caebf1;  position:absolute`
//Icon
const Icon = styled.div`width: 40px;height: 40px;border-radius:50%; background-color: #1adf16 ;display: flex; justify-content:center;align-items: center;margin:20px;
transition: all 1.5s ease;
&:hover{background-color: #3373c7; transform:scale(1.1)} `



const Product = ({item}) => {
  return (
    <Container>
        <Circle/>
        <Image src={item.img}/>
        
        <Info>
                <Icon>
<ShoppingCartOutlined/>
        </Icon>
        <Icon>
<SearchOutlined/>
        </Icon>    <Icon>
<FavoriteBorderOutlined/>
        </Icon>   
        </Info>
 
    </Container>
  )
}

export default Product