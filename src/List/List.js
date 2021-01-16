import React from 'react'
import TodoItem from '../TodoItem/TodoItem'

function List(props) {


    return (
        <ul >
            <TodoItem id={props.thisId} name={props.thisName} isFavorit={props.thisIsFavorit} isChecked={props.thisIsChecked} />
        </ul>
    )
}

export default List
