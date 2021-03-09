import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledUl = styled.ul`
display: flex;
justify-content: flex-start;
max-width: 824px;
margin-top: 90px; 
list-style: none;
`

const StyledLi = styled.li`
font-size: 24px;
line-height: 2.5rem;
padding-right: 10px;
margin: 5px 0px;

a{
    text-decoration:none;
}

a:link, a:visited {
color:#000;
}

a:hover, .active {
color:#3e92cc;
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
