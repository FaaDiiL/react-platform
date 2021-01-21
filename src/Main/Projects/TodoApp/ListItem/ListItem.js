import React from 'react'

const ListItem = (props) => {
    return (
        <>
        {props.listSetLi.map(item => <li key={item.id}>{item.title}</li> )}
        
        </>
            )
}

export default ListItem
