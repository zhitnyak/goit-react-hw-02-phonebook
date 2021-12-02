import React, { Component } from "react";
import "./App.css";
import { nanoid } from "nanoid";
// import Vidget from "./Vidget";
// import TodoList from "./TodoList/TodoList";
// import initialTodos from "./TodoList/todos.json";

class App extends Component {
  state = {
    contacts: [],
    name: "",
    number: "",
  };
  handleInputChange = (e) => {
    const { name, number } = e.currentTarget;
    // console.log(e.currentTarget);
    // console.log(e.currentTarget.name);
    // console.log(e.currentTarget.number);

    this.setState({
      // [e.currentTarget.name]: e.currentTarget.number,
      [name]: number,
    });
  };
  render() {
    return (
      <>
        <form>
          <h1>Phonebook</h1>
          <label>
            <input
              type="text"
              name="name"
              value={this.state.name}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={this.handleInputChange}
            />
          </label>
          <label>
            <input
              type="tel"
              name="number"
              value={this.state.number}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={this.handleInputChange}
            />
          </label>

          <button>Add contact</button>
        </form>
      </>
    );
  }
}

// class App extends Component {
//   state = {
//     todos: initialTodos,
//   };

//   deleteTodo = (todoId) => {
//     this.setState((prevState) => ({
//       todos: prevState.todos.filter((todo) => todo.id !== todoId),
//     }));
//   };
//   render() {
//     const { todos } = this.state;
//     const completedTodo = todos.reduce(
//       (acc, todo) => (todo.completed ? acc + 1 : acc),
//       0
//     );
//     return (
//       <>
//         <div>
//           <span>ОБЩЕЕ Кол-во: {todos.length}</span>
//           <span>Выполнeнных: {completedTodo}</span>
//         </div>
//         <TodoList todos={todos} onDeleteTodo={this.deleteTodo} />
//       </>
//     );
//   }
// }

export default App;
