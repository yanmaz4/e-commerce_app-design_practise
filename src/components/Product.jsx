import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from "@mui/icons-material"
import styled from "styled-components"

const Info = styled.div`opacity: 0; width:90%;height:90%; object-fit:cover;position: absolute;top: 0;left: 50;display: flex;z-index: 3; justify-content: center;align-items: center;color:orange; background-color:rgba(0.0.0.0.3); transition: all 0.5s ease; cursor: pointer;`

const Container = styled.div`flex:1; margin: 5px; min-width: 280px;min-height: 350px; display: flex;
align-items: center; justify-content: center; background-color: #f5fbfd; position: relative; border:2px solid green; object-fit:cover; &:hover ${Info}{
        opacity: 1;
}`

const Image = styled.img`width:100%;height:100%; object-fit:cover; z-index: 2;flex-direction:column;`

const Circle = styled.div` width: 200px;height: 200px;border-radius:50%;`

const Icon = styled.div`width: 40px;height: 40px;border-radius:50%; background-color: #a7d3e6 ;display: flex; justify-content:center;align-items: center;margin:20px;
transition: all 1.5s ease;
&:hover{background-color: #3373c7; transform:scale(1.1)
} `



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