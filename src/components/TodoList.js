/* eslint-disable react/prop-types */
import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({
  todos, handleChangeProps, handleDeleteProps, setUpdate,
}) => (
  <ul>
    {todos.map((todo) => (
      <TodoItem
        key={todo.id}
        todo={todo}
        handleChangeProps={handleChangeProps}
        handleDeleteProps={handleDeleteProps}
        setUpdate={setUpdate}
      />
    ))}
  </ul>

);
export default TodoList;
