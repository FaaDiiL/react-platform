import styled from 'styled-components'

import logo from '../img/logo.png'
import Navigation from './Navigation/Navigation'

const StyledHeader = styled.header`
background: url(${logo}) no-repeat ;
width: 100%;
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