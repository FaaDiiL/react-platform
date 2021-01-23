import React from 'react'

const ListItem = ({listSetLi, handleDelete}) => {
    return (
        <>
            {listSetLi.map(item => {
                return( 
                        <li key={item.id}>
                        {item.title} <button onClick={() => handleDelete(item.id) }>Delete todo</button>
                        </li>
                    )
                } 
                )
            }
        </>
    )
}

export default ListItem