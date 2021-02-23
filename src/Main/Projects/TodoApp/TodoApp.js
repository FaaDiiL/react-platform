import React, { useState, useEffect } from "react";
import AddTodo from "./AddTodo/AddTodo";
import ViewTodos from "./ViewTodos/ViewTodos";
import styled from "styled-components";

const StyledTodo = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  width: 100vw;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(-135deg, #3f87a6 20%, #c0fdff 60%, #3f87a6 70%);
  color: black;
`;

function TodoApp() {
  const [addTodo, setAddTodo] = useState("");

  // const storageList = JSON.parse(localStorage.getItem("todos"));

  const [newTodos, setNewTodos] = useState(["nikos"]);

  const handleChange = (e) => {
    setAddTodo(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setNewTodos([...newTodos, { name: addTodo }]);
    /* saveTolocal(newTodos); */
  };

  /* const saveTolocal = (newTodos) => {
    localStorage.setItem("todos", JSON.stringify(newTodos));
  }; */

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(newTodos));
  }, [newTodos]);

  useEffect(() => {
    JSON.parse(localStorage.getItem("todos"));
  }, []);

  return (
    <StyledTodo id="todoapp">
      <h2>todo app</h2>
      <AddTodo handleChange={handleChange} handleSubmit={handleSubmit} />
      <ViewTodos newTodos={newTodos} />
    </StyledTodo>
  );
}

export default TodoApp;
