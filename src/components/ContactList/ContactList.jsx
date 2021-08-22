import Contact from "../Contact/Contact";
import propTypes from "prop-types";

function ContactList({ contacts, deleteContactFromList }) {
  return (
    <ul>
      {contacts.map((contact) => {
        return (
          <Contact
            contact={contact}
            key={contact.id}
            deleteContactFromList={deleteContactFromList}
          />
        );
      })}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: propTypes.arrayOf(
    propTypes.shape({
      name: propTypes.string,
      number: propTypes.string,
    })
  ),
  deleteContactFromList: propTypes.func,
};

export default ContactList;
