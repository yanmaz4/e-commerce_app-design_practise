import styled from "styled-components"
import {mobile} from "../responsive"

const Container = styled.div`
height: 35px;
background-color:teal;
color:white;
display:flex;
align-items: center;
justify-content:center;
${mobile({backgroundColor:"blue"})}
`


const Announcement = () => {
  return (
    <Container>
        Super Deal! Free Shipping on Over $50
    </Container>
  )
}

export default Announcement