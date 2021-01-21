import React from 'react'

import ListItem from '../ListItem/ListItem'

function List(props) {
     return (
          <ul>
               <ListItem listSetLi={props.mainSetLi} />
          </ul>
     )
}

export default List
