import React from 'react'

import ListItem from '../ListItem/ListItem'

function List({mainSetLi, handleDelete}) {
     return (
          <ul>
               <ListItem 
               handleDelete={handleDelete} 
               listSetLi={mainSetLi} 
               />
          </ul>
     )
}

export default List
