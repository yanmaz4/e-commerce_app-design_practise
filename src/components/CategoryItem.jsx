
import styled from "styled-components";


const Container = styled.div`flex:1;margin:3;height:95vh;position:relative; `
const Image = styled.img`width:90%;height:90%; object-fit:cover; `
const Info = styled.div`position:absolute; width:100%;height:100%; top:0;left:0;
display:flex;flex-direction:column; align-items: center;justify-content: center;`
const Title = styled.div` font-size:30px; color:orange;`
const Button = styled.button`border:none;padding: 10px;background-color: #fff;color:olive;
font-size: 20px;cursor: pointer;font-weight: 500;`

const CategoryItem = ({item}) => {
  return (
    <Container>
<Image src={item.img}/>
<Info>
    <Title>{item.title}</Title>
    <Button>SHOP NOW</Button>
</Info>
    </Container>
  )
}

export default CategoryItem