import { Component } from "react";
import { v4 as uuidv } from "uuid";
import propTypes from "prop-types";
import style from "./ContactForm.module.css";

class ContactForm extends Component {
  constructor({ contacts, addToContactList }) {
    super();

    this.state = {
      name: "",
      number: "",
      contacts: contacts,
    };

    this.addToContactList = addToContactList;
  }

  handleFormSubmit = (event) => {
    event.preventDefault();

    if (
      this.state.contacts.find((contact) => contact.name === this.state.name)
    ) {
      return alert(`${this.state.name} is already in contacts!`);
    }

    console.log(this.state.filter);

    this.addToContactList({
      id: uuidv(),
      name: this.state.name,
      number: this.state.number,
    });
  };

  handleInputChange = (event) => {
    if (event.currentTarget.name === "name") {
      this.setState({
        name: event.currentTarget.value,
      });

      return;
    }

    this.setState({
      number: event.currentTarget.value,
    });
  };

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <label className={style.label}>
          <span>Name</span>
          <input
            className={style.input}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            onChange={this.handleInputChange}
          />
        </label>
        <label className={style.label}>
          <span>Number</span>
          <input
            className={style.input}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            onChange={this.handleInputChange}
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  contacts: propTypes.arrayOf(
    propTypes.shape({
      name: propTypes.string,
      number: propTypes.string,
    })
  ),
  addToContactList: propTypes.func,
};

export default ContactForm;
