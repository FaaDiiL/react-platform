import React from 'react'

import ListItem from '../ListItem/ListItem'

function List({mainTodos, handleDelete}) {
     return (
          <ul>
               <ListItem 
               handleDelete={handleDelete} 
               todos={mainTodos} 
               />
          </ul>
     )
}

export default List
