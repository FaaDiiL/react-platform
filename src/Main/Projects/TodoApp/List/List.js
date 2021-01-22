import React from 'react'

import ListItem from '../ListItem/ListItem'

function List(props) {
     return (
          <ul>
               <ListItem Todos={props.mainSetLi} />
          </ul>
     )
}

export default List
