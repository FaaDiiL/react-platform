import React from 'react'
import ListItem from '../ListItem/ListItem'
import styled from 'styled-components'

const ListWrapper = styled.ul`
display: flex;
flex-direction: column;
max-width: 300px;
background-color: /* (rgb(244, 241, 280)) */ violet;
`;



function List({mainTodos, handleDelete}) {
     return (
          <ListWrapper>
               <ListItem 
               handleDelete={handleDelete} 
               todos={mainTodos} 
               />
          </ListWrapper>
     )
}

export default List
