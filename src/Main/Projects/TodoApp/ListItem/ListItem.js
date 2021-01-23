import React from 'react'

    return (
        <>
        {listSetLi.map(item => {
            return( 
            <li key={item.id}>{item.title}
            <button onClick={() => handleDelete(item.id) }>Delete todo</button>
            </li>
            )
            } )}
        </>
