import React, { Component } from "react";

class Form extends Component {
  state = {
    name: "",
    number: "",
  };
  handleInputChange = (e) => {
    const { name, value } = e.currentTarget;
    // console.log(e.currentTarget);
    // console.log(e.currentTarget.name);
    // console.log(e.currentTarget.number);

    this.setState({
      // [e.currentTarget.name]: e.currentTarget.number,
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state);
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: "", number: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name
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
          Number
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
    );
  }
}
export default Form;
