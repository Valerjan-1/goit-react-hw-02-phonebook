const ListContact = ({ contacts, removeContact }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>
          {contact.name}: {contact.number}
          <button onClick={() => removeContact(contact.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default ListContact;
