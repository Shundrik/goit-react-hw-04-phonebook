import { nanoid } from 'nanoid';
import { useEffect } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { ContactList } from './ContactList/ContactList';
import { ContactsEditor } from './ContactsEditor/ContactsEditor';
import { Filter } from './Filter/Filter';

const LS_KEY = 'contacts';
const ContactCounter = styled.p`
  margin: 10px auto;
  width: 100px;
  text-align: center;
`;
const Title = styled.h1`
  text-align: center;
`;

const getLs = () => {
  const contactsFromLs = window.localStorage.getItem(LS_KEY);

  if (contactsFromLs) {
    return JSON.parse(contactsFromLs);
  }
};

export const NewPhonebook = () => {
  const [contacts, setContacts] = useState(
    getLs() ?? [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ]
  );

  const [filter, setFilter] = useState('');

  const addContact = ({ name, number }) => {
    const id = nanoid();
    const newObject = { id, name, number };
    console.log(newObject);
    console.log(contacts);
    const inList = contacts.find(
      contact => contact.name === newObject.name
      // console.log(contact.name === newObject.name)
    );
    inList
      ? alert(`${newObject.name} is alrady in contacts`)
      : setContacts(prevState => [newObject, ...prevState]);
  };

  useEffect(() => {
    window.localStorage.setItem(LS_KEY, JSON.stringify(contacts));
  }, [contacts]);

  useEffect(() => {
    const contactsFromLs = window.localStorage.getItem(LS_KEY);
    console.log(contactsFromLs);
    if (contactsFromLs) {
      setContacts(JSON.parse(contactsFromLs));
    }
  }, []);

  const contactFilter = () => {
    const normalized = filter.toLowerCase();
    const resultFilter = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalized)
    );
    return resultFilter;
  };

  const deleteContact = contactId => {
    console.log(contactId);
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };

  const visibleContact = contactFilter();

  return (
    <>
      <div>
        <ContactCounter>
          Phonebook <br /> <span>{contacts.length}</span> contacts
        </ContactCounter>
      </div>
      <ContactsEditor onSubmit={addContact} />
      <Title>Contacts</Title>

      <Filter onChange={e => setFilter(e.target.value)} value={filter}></Filter>

      <ContactList
        contacts={visibleContact}
        onDeliteContact={deleteContact}
      ></ContactList>
    </>
  );
};