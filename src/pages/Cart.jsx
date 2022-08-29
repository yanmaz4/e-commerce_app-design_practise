import { Add, Remove } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { mobile } from "../responsive";

//Container
const Container = styled.div``;
//Wrapper
const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ width: "100%", marginLeft: "0px" })}
`;
//Title
const Title = styled.h1`
  font-weight: 400;
  text-align: center;
`;
//Top
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;
//TopButton
const TopButton = styled.button`
  padding: 10px;
  font-weight: 800;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "greenyellow" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
  border: 1px solid black;
`;

//TopTexts
const TopTexts = styled.div`
  ${mobile({ display: "none" })}
`;
//TopText
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;
//Bottom
const Bottom = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;
//Info
const Info = styled.div`
  flex: 3;
`;
//Product
const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;
//ProductDetail
const ProductDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;
//Image
const Image = styled.img`
  width: 200px;
  height: 200px;
`;
//Details
const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  font-size: 20px;

`;
//PriceDetail
const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
//ProductsName
const ProductsName = styled.span`
 ${mobile({ marginBottom: "10px" })}`;
//ProductId
const ProductId = styled.span` ${mobile({ marginBottom: "10px" })}`;
//ProductColor
const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  ${mobile({ marginBottom: "10px" })}
`;
//ProductSize
const ProductSize = styled.span``;
//ProductAmountContainer
const ProductAmountContainer = styled.span`
  display: flex;
  align-items: center;
`;
//ProductAmount
const ProductAmount = styled.span`
  font-size: 25px;
  margin-bottom: 15px;
  ${mobile({ margin: "5px 15px" })}

`;
//ProductPrice
const ProductPrice = styled.span`
  font-size: 30px;
  font-weight: 300;
  color: orange;
  ${mobile({ marginBottom: " 2px" })}

`;
//Summary
const Summary = styled.div`
  flex: 1;
  border: 1px solid lawngreen;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
  width: 80%;
  font-size: 20px;
`;
//SummaryTitle
const SummaryTitle = styled.h1`
  font-weight: 500;
`;
//SummaryItem
const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;
//SummaryItemText
const SummaryItemText = styled.span``;
//SummaryItemPrice
const SummaryItemPrice = styled.span``;
//Button
const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: greenyellow;
  color: white;
  font-weight: 600;
  cursor: pointer;
`;

const Cart = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping Bag (2)</TopText>
            <TopText>Your Wishlist (0)</TopText>
          </TopTexts>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <Image src="https://media.istockphoto.com/photos/fashion-white-sneakers-in-neon-light-sport-shoes-for-training-in-the-picture-id1301394040?k=20&m=1301394040&s=612x612&w=0&h=S9UaSMxBtR_y5w4Z2YdlA69PYi9PxMdVDyGhAbarl0w=" />
              <Details>
                <ProductsName>
                  <b>Product:</b> NEON SHOE
                </ProductsName>
                <ProductId>
                  <b>ID:</b>12346435
                </ProductId>
                <ProductColor color="black" />
                <ProductSize>
                  <b>Size:</b>42
                </ProductSize>
              </Details>

              <PriceDetail>
                <ProductDetail>
                  <ProductAmountContainer>
                    <Add />
                    <ProductAmount>3</ProductAmount>
                    <Remove />
                  </ProductAmountContainer>
                  <ProductPrice>$ 30</ProductPrice>
                </ProductDetail>
              </PriceDetail>
            </Product>

            <hr />

            <Product>
              <Image src="https://m.media-amazon.com/images/I/81euNVK3zrL._UL1500_.jpg" />
              <Details>
                <ProductsName>
                  <b>Product:</b> NEON SHOE
                </ProductsName>
                <ProductId>
                  <b>ID:</b>12346435
                </ProductId>
                <ProductColor color="blue" />
                <ProductSize>
                  <b>Size:</b>42
                </ProductSize>
              </Details>

              <PriceDetail>
                <ProductDetail>
                  <ProductAmountContainer>
                    <Add />
                    <ProductAmount>3</ProductAmount>
                    <Remove />
                  </ProductAmountContainer>
                  <ProductPrice>$ 70</ProductPrice>
                </ProductDetail>
              </PriceDetail>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>SubTotal</SummaryItemText>
              <SummaryItemPrice>$ 100</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 7.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$ -5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$ 102</SummaryItemPrice>
            </SummaryItem>
            <Button>CHECKOUT NOW</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
