import React from 'react'

function TodoItem(props) {
    return (
        <li>
            <span>{props.text}</span>
            <input type='checkbox' value={props.isChecked} />
            <input type='checkbox' value={props.isFavorite} />
            <input type='button' value='delete' />
        </li>
    )
}

export default TodoItem
