import styled from 'styled-components'

import Navigation from './Navigation/Navigation'
import img from '../img/Header.png'

const StyledHeader = styled.header`
background: url(${img});
color: #fff;
width: 100vw;
height:193px;
background: blue;
`

function Header(props) {
     return (
          <StyledHeader>
               <h1>{props.title}</h1>
               <Navigation />
          </StyledHeader> 
     )
}

export default Header