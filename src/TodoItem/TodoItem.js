import React from 'react'

function TodoItem() {
    return (
        <li>
            <span>Gymma klart!</span>
            <input type='checkbox' />
            <input type='button' value='delete' />
        </li>
    )
}

export default TodoItem
