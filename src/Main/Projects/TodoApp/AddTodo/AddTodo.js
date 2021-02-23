import React from "react";

function AddTodo({ handleChange, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="text" onChange={handleChange} />
      <button type="submit">Add Todo</button>
    </form>
  );
}

export default AddTodo;
