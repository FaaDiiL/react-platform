import React from 'react'
import { Link } from 'react-router-dom'

import styled from 'styled-components'

const StyledUl = styled.ul`
list-style: none;
display:flex;
justify-content: space-evenly;
`

const StyledLi = styled.li`
/* e-height: 2.5rem; */
/* margin: 5px 0px; */

a{
    color: white;
    text-decoration:none;
    text-transform: uppercase;
    font-family: Arial, Helvetica, sans-serif;
}

`

function Navigation() {
    return (
        <StyledUl>
            <StyledLi><Link to='/'>Home</Link></StyledLi>  
            <StyledLi><Link to='/about'>About</Link></StyledLi>  
            <StyledLi><Link to='/projects'>Projects</Link></StyledLi>  
            <StyledLi><Link to='/contact'>Contact</Link></StyledLi>
        </StyledUl>
    )
}

export default Navigation
