const FormContact = ({
  name,
  number,
  onNameChange,
  onNumberChange,
  addContact,
}) => {
  const handleSubmit = e => {
    e.preventDefault();
    addContact();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <input type="text" value={name} onChange={onNameChange} required />
      </label>
      <label>
        Number
        <input type="tel" value={number} onChange={onNumberChange} required />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
};

export default FormContact;
