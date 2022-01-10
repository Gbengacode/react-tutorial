/* eslint no-param-reassign: "error" */
import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodoList from './TodoList';
import InputToDo from './InputToDo';
import Header from './Header';

class TodoContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          id: uuidv4(),
          title: 'first title',
          complete: true,
        },
        {
          id: uuidv4(),
          title: 'second title',
          complete: true,
        },
      ],
    };
  }

handleChange = (id) => {
  this.setState((prevState) => ({
    todos: prevState.todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo, complete: !todo.complete,
        };
      }
      return todo;
    }),
  }));
}

deleteItem = (id) => {
//   const { todos } = this.state;
  this.setState((prevState) => ({
    todos: [
      ...prevState.todos.filter((todo) => todo.id !== id),
    ],
  }));
}

addToDoItem = (title) => {
  if (title.trim() === '') {
    return;
  }
  const { todos } = this.state;
  const todo = {
    id: uuidv4(),
    title,
    complete: true,

  };

  this.setState({
    todos: [...todos, todo],
  });
}

setUpdate = (updatedTitle, id) => {
  const { todos } = this.state;

  this.setState({
    todos: todos.map((todo) => {
      if (todo.id === id) {
        todo.title = updatedTitle;
      }
      return todo;
    }),
  });
}

render() {
  const { todos } = this.state;
  return (
    <>
      <div className="container">
        <div className="inner">
          <Header />
          <InputToDo addToDoItemProps={this.addToDoItem} />
          <TodoList
            todos={todos}
            handleChangeProps={this.handleChange}
            handleDeleteProps={this.deleteItem}
            setUpdate={this.setUpdate}
          />
        </div>
      </div>
    </>
  );
}
}
export default TodoContainer;
