import React from "react";

function ViewTodos({ newTodos }) {
  // console.log(newTodos)
  return (
    <>
      <h4>This is your list of todos!</h4>
      <ul>
        {newTodos.map((todo, index) => (
          <li key={index}>
            <p>{todo.name}</p>
            <input type="checkbox" />
            <input type="button" value="Delete" />
          </li>
        ))}
      </ul>
    </>
  );
}

export default ViewTodos;
