import React, { Component } from "react";
import "./App.css";
import { nanoid } from "nanoid";
import Form from "./components/Forma";
// import Vidget from "./Vidget";
// import TodoList from "./TodoList/TodoList";
// import initialTodos from "./TodoList/todos.json";

class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };

  formSubmitHandler = (data) => {
    console.log(data);
  };
  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <Form onSubmit={this.formSubmitHandler}> </Form>
        <h2>Contacts</h2>
        <label>
          Find contacts by name
          <input type="text"></input>
        </label>
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
