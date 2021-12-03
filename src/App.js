import React, { Component } from "react";
import "./App.css";
import { nanoid } from "nanoid";
import Form from "./components/Forma/Forma";
import Filter from "./components/Filter/Filter";
import ContactList from "./components/ContactList/ContactList";
import { Fragment } from "react";
// import Vidget from "./Vidget";
// import TodoList from "./TodoList/TodoList";
// import initialTodos from "./TodoList/todos.json";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  formSubmitHandler = (data) => {
    console.log(data);
  };

  changeFilter = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase(normalizedFilter)
    );
  };

  deleteContact = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(
        (contact) => contact.id !== contactId
      ),
    }));
  };
  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();
    return (
      <section className="wrapper">
        <h1 className="title">Phonebook</h1>
        <Form onSubmit={this.formSubmitHandler} />
        <h2 className="title">Contacts</h2>
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactList contacts={visibleContacts} onChange={this.deleteContact} />
      </section>
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
