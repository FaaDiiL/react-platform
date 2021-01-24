
import React from 'react'
import styled from 'styled-components'


const StyledLi = styled.li`
display: flex;
justify-content: flex-start;
list-style: none;
padding: 1px 0;
border-bottom: 1px solid rgb(141, 130, 126);
width: inherit;



`;


    const ListItem = ({todos, handleDelete}) => {
        const TodoMap = todos.map(todo =>{
            return( 
                    <StyledLi key={todo.id}>
                        <p>{todo.title} </p>
                        <button onClick={() => handleDelete(todo.id) }>Delete todo</button>
                    </StyledLi>
                )
        })
    
        return (
                <>
                    {TodoMap}
                </>
    )
}

export default ListItem
