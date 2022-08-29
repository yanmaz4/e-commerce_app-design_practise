import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 95vh;
  position: relative;
  ${mobile({ height: "40vh" })}
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({ height: "40vh", display:"flex",flexDirection:"column" })}
 
`;
const Info = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Title = styled.div`
  font-size: 30px;
  color: orange;
  ${mobile({ height: "30vh", fontSize:"13px" })}

  
`;
const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: #fff;
  color: olive;
  font-size: 20px;
  cursor: pointer;
  font-weight: 500;
  ${mobile({ height: "5vh", fontSize:"13px",border: "1px solid black", })}

`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
    </Container>
  );
};

export default CategoryItem;
