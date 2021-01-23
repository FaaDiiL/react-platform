import React from 'react'

const ListItem = ({todos, handleDelete}) => {
    return (
        <>
            {todos.map(todo => {
                return( 
                        <li key={todo.id}>
                        {todo.title} <button onClick={() => handleDelete(todo.id) }>Delete todo</button>
                        </li>
                    )
                } 
                )
            }
        </>
    )
}

export default ListItem