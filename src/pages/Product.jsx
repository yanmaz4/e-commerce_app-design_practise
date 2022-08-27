
import { Add, Remove } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";

//Container
const Container = styled.div``;
//Wrapper
const Wrapper = styled.div`padding: 50px;display: flex; justify-content: space-between;`;
//ImageContainer
const ImageContainer = styled.div`flex: 1;margin: 10px; padding: 20px;`
//Image
const Image = styled.img`width: 88%;height: 80vh; object-fit:cover`;
//InfoContainer
const InfoContainer = styled.div`flex: 1;margin: 10px; padding: 20px;`;
//Title
const Title = styled.div`font-weight: 700; margin:20px 0px; font-size:25px;`
//Desc
const Desc = styled.div`font-size: 20px;`
//Price
const Price = styled.div`font-size:25px;font-weight: 700;`

//FilterContainer
const FilterContainer=styled.div`display: flex;justify-content: space-between; width: 50%;margin: 20px 0px;`

//Filter
const Filter = styled.div`margin: 20px; display: flex; align-items: center;`
//FilterTitle
const FilterTitle= styled.span`font-size: 20px;font-weight:600;`
//FilterColor
const FilterColor= styled.div` width: 20px;height: 20px;border-radius:50%; background-color: ${props=>props.color};margin:0px 5px;cursor: pointer; `
//FilterSize
const FilterSize= styled.select``
//FilterSizeOption
const FilterSizeOption= styled.option`` 
//AddContainer
const AddContainer= styled.div`display: flex; justify-content: space-between;align-items: center;` 
//AmountContainer
const AmountContainer= styled.div`display: flex; align-items: center; font-weight: 800;` 
//Amount
const Amount= styled.span`width: 30px;height: 30px; border-radius:10px; border: 2px solid black;display: flex; align-items: center;justify-content: center;margin: 0px 5px;` 
//Button
const Button= styled.button`padding: 20px;border:2px solid black;background-color: #50d264;;cursor:pointer;font-weight: 700;

&:hover{background-color: #25b9de; transform:scale(1.1);}` 



const Product = () => {
  return (
    <Container>
        <Navbar />
      <Announcement />
      <Wrapper>
        <ImageContainer>
          <Image src="https://i.pinimg.com/originals/3d/fc/c5/3dfcc5995635b2300b823c11a8044f4e.jpg"/>   
        </ImageContainer>
       <InfoContainer>
        <Title>Maxi Skirt</Title>
        <Desc>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati error blanditiis minima, quasi adipisci placeat, est dolorem, vel veniam cupiditate inventore minus cum maiores mollitia iusto a incidunt? Libero corrupti ipsam, officia a aperiam laudantium beatae eius quod expedita cumque saepe labore nihil soluta nostrum itaque amet perferendis rem culpa!</Desc>
        <br />
        <Price>20$</Price>
        <FilterContainer>
<Filter> 
<FilterTitle>COLOR</FilterTitle> 
<FilterColor color="black"/>
<FilterColor color="darkblue"/>
<FilterColor color="green"/>
<FilterColor color="orange"/>
</Filter>
<Filter> 
<FilterTitle>SIZE</FilterTitle> 
<FilterSize>
<FilterSizeOption>XS</FilterSizeOption>
<FilterSizeOption>S</FilterSizeOption>
<FilterSizeOption>M</FilterSizeOption>
<FilterSizeOption>XL</FilterSizeOption>
<FilterSizeOption>L</FilterSizeOption>
<FilterSizeOption>XXL</FilterSizeOption>
</FilterSize>

</Filter>
</FilterContainer>
<AddContainer>
<AmountContainer>
<Remove/>
<Amount>1</Amount>
<Add/>
</AmountContainer>
<Button>ADD TO CART </Button>
</AddContainer>

       </InfoContainer>
      </Wrapper>
      <Newsletter />
      

      <Footer />
    </Container>
  );
};

export default Product;
