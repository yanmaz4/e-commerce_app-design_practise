import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'


//Container
const Container = styled.div``

 //Title
 const Title= styled.h1`margin: 20px;`

//FilterContainer
const FilterContainer=styled.div`display: flex;justify-content: space-between;`

//Filter
const Filter = styled.span`margin: 20px; display: flex;`
//FilterText
const FilterText= styled.div`font-size: 20px;font-weight:600; padding-right:10px`
//Select
const Select= styled.select`padding: 10px;margin-right: 20px;`
//Option
const Option= styled.option`padding: 10px;margin-right: 20px;`  



const ProductList = () => {
  return (
    <Container>
<Navbar/>
<Announcement/>
<Title>Dresses</Title>
<FilterContainer>
<Filter> 
<FilterText>Filter Products:</FilterText> 
<Select>
<Option disabled selected> Color</Option>
<Option>White</Option>
<Option>Black</Option>
<Option>Red</Option>
<Option>Blue</Option>
<Option>Yellow</Option>
<Option>Green</Option>
<Option>Pink</Option>
</Select>

<Select>
<Option disabled selected> Size</Option>
<Option>XS</Option>
<Option>S</Option>
<Option>M</Option>
<Option>L</Option>
<Option>XL</Option>
<Option>XXL</Option>
</Select>

</Filter>
<Filter> 
<FilterText>Sort Products:</FilterText> 
<Select>
<Option selected>Newest</Option>
<Option>Price(asc)</Option>
<Option>Price(desc)</Option>
</Select>

</Filter>
</FilterContainer>
<Products/>
<Newsletter/>
<Footer/>


    </Container>
  )
}

export default ProductList