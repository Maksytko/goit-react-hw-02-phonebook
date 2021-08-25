import "./App.css";
import { Component } from "react";
import { v4 as uuidv } from "uuid";

import ContactForm from "./components/ContactForm/ContactForm";
import Filter from "./components/Filter/Filter";
import ContactList from "./components/ContactList/ContactList";

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

  addToContactList = (nameForCheck, number) => {
    if (
      this.state.contacts.find((contact) => {
        return contact.name === nameForCheck;
      })
    ) {
      return alert(`${nameForCheck} is already in contacts!`);
    }

    return this.setState((prevState) => {
      return {
        contacts: [
          ...prevState.contacts,
          {
            id: uuidv(),
            name: nameForCheck,
            number: number,
          },
        ],
      };
    });
  };

  handleInputFilterChange = (event) => {
    this.setState({
      filter: event.currentTarget.value,
    });
  };

  filterContactsByName = () => {
    return this.state.contacts.filter((contact) =>
      contact.name.toUpperCase().includes(this.state.filter.toUpperCase())
    );
  };

  deleteContactFromList = (event) => {
    this.setState((prevState) => {
      return {
        contacts: prevState.contacts.filter(
          (contact) => contact.id !== event.target.id
        ),
      };
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Phonebook</h1>
        <ContactForm
          contacts={this.state.contacts}
          addToContactList={this.addToContactList}
        />
        <h2>Contacts</h2>
        <Filter onChangeFilterInput={this.handleInputFilterChange} />
        <ContactList
          contacts={this.filterContactsByName()}
          deleteContactFromList={this.deleteContactFromList}
        />
      </div>
    );
  }
}

export default App;
