/* eslint-disable react/prop-types */
import React from 'react';
import styles from './TodoItem.module.css';

class TodoItem extends React.Component {
  completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through',
  };

  constructor(props) {
    super(props);
    this.state = {
      editing: false,
    };
  }

      handleEditing = () => {
        this.setState({
          editing: true,
        });
      }

      handleUpdatedDone = (event) => {
        if (event.key === 'Enter') {
          this.setState({ editing: false });
        }
      }

      render() {
        const { editing } = this.state;
        const viewMode = {};
        const editMode = {};

        if (editing) {
          viewMode.display = 'none';
        } else {
          editMode.display = 'none';
        }
        const { todo, handleDeleteProps, handleChangeProps } = this.props;

        return (
          <div>
            <input
              type="checkbox"
              checked={todo.complete}
              onChange={() => {
                handleChangeProps(todo.id);
              }}
              className={styles.checkbox}
            />
            {' '}
            <li className={styles.item}>
              <div className="" onDoubleClick={this.handleEditing} style={viewMode}>

                <button
                  type="button"
                  onClick={() => {
                    handleDeleteProps(todo.id);
                  }}
                  className="input-submit"
                >
                  Delete
                </button>

                <span style={todo.complete ? this.completedStyle : null}>{todo.title}</span>
              </div>
              <input
                type="text"
                style={editMode}
                className={styles.textInput}
                value={todo.title}
                onChange={(e) => {
                  const { id } = todo;
                  const { setUpdate } = this.props;
                  setUpdate(e.target.value, id);
                }}
                onKeyDown={this.handleUpdatedDone}
              />
            </li>
          </div>
        );
      }
}

export default TodoItem;
