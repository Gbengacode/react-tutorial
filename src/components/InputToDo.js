/* eslint-disable react/prop-types */
import React from 'react';

class InputToDo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
    };
  }

    handleChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value,
      });
    }

    handleSubmit = (e) => {
      e.preventDefault();
      const { title } = this.state;
      const { addToDoItemProps } = this.props;
      addToDoItemProps(title);
    }

    render() {
      return (
        <form className="form-container" onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Add Todo..." name="title" className="input-text" onChange={this.handleChange} />
          <button type="button" onClick={this.handleSubmit} className="input-submit">Submit</button>
        </form>
      );
    }
}

export default InputToDo;
