import propTypes from "prop-types";

function Contact({ contact, deleteContactFromList }) {
  return (
    <li>
      {contact.name}: {contact.number}{" "}
      <button type="button" id={contact.id} onClick={deleteContactFromList}>
        Удалить
      </button>
    </li>
  );
}

Contact.propTypes = {
  contacts: propTypes.arrayOf(
    propTypes.shape({
      name: propTypes.string,
      number: propTypes.string,
    })
  ),
  deleteContactFromList: propTypes.func,
};

export default Contact;
