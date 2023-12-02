import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import FormContact from './FormContact/FormContact';
import ListContact from './ListContact/ListContact';
import Filter from './Filter/Filter';

export const App = () => {
  const [state, setState] = useState({
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  });

  const onNameChange = e => {
    setState(prevState => ({
      ...prevState,
      name: e.target.value,
    }));
  };

  const onNumberChange = e => {
    setState(prevState => ({
      ...prevState,
      number: e.target.value,
    }));
  };

  const addContact = () => {
    const { name, contacts, number } = state;

    if (!name.trim() || !number.trim()) return;

    const nameCheck = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (nameCheck) {
      alert(`${name} is already in contacts.`);
      return;
    }

    const newContact = { id: nanoid(), name, number };
    setState(prevState => ({
      ...prevState,
      contacts: [...prevState.contacts, newContact],
      name: '',
      number: '',
    }));
  };

  const handleFilterChange = event => {
    setState(prevState => ({ ...prevState, filter: event.target.value }));
  };

  const removeContact = id => {
    setState(prevState => ({
      ...prevState,
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  const filteredContacts = state.contacts.filter(contact =>
    contact.name.toLowerCase().includes(state.filter.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <FormContact
        name={state.name}
        number={state.number}
        onNameChange={onNameChange}
        onNumberChange={onNumberChange}
        addContact={addContact}
      />
      <h2>Contacts</h2>
      <Filter filter={state.filter} handleFilterChange={handleFilterChange} />
      <ListContact contacts={filteredContacts} removeContact={removeContact} />
    </div>
  );
};
