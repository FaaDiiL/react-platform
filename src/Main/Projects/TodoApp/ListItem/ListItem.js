import React from 'react'

const ListItem = ({ Todos }) => {
    return (
        <>
        {Todos.map(todo => <li key={todo.id}>{todo.title}</li> )}
        
        </>
            )
}

export default ListItem
