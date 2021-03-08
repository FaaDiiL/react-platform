import React from 'react'
import { Link } from 'react-router-dom'

import styled from 'styled-components'

const StyledUl = styled.ul`
width: 50vh;
/* justify-items: center; */
display: flex;
justify-content: space-between;
list-style: none;
margin: 0 auto;


`

const StyledLi = styled.li`
/* background-color:  #370637; */
line-height: 2.5rem;
font-size: 20px;
font-weight: bold;
/* margin: 5px 0px; */
color:white;
text-decoration: none;

:hover{
    background-color:rgba(255.150.150.0,3);
    color:black;
}
 


a:visited, a:link{
    color:white;
    text-decoration: none;
    
}
a:hover{    
    text-decoration: none;
    }


`


function Navigation() {
    return (
        <StyledUl>
           <Link to='/'> <StyledLi>Home</StyledLi></Link>  
           <Link to='/about'><StyledLi>About</StyledLi></Link>
           <Link to='/projects'> <StyledLi>Projects</StyledLi></Link>
            <Link to='/contact'><StyledLi>Contact</StyledLi></Link>
        </StyledUl>
    )
}

export default Navigation
