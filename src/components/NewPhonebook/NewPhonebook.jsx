import { nanoid } from 'nanoid';
import React from 'react';
import styled from 'styled-components';
import { ContactList } from './ContactList/ContactList';
import { ContactsEditor } from './ContactsEditor/ContactsEditor';
import { Filter } from './Filter/Filter';


const ContactCounter = styled.p`
margin:10px auto;
  width: 100px;
  text-align: center;
`
const Title = styled.h1`
  text-align: center;
`
export class NewPhonebook extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    // name: '',
    // number: '',
  };

  addContact = ({ name, number }) => {
    const id = nanoid();
    const newObject = { id, name, number };
    console.log(newObject);
    const inList = this.state.contacts.find(
      contact => contact.name === newObject.name
    );

    inList
      ? alert(`${newObject.name} is alrady in contacts`)
      : this.setState(prevState => ({
          contacts: [newObject, ...prevState.contacts],
        }));
  };

  contactFilter = () => {
    const normalized = this.state.filter.toLowerCase();
    console.log(normalized);

    const resultFilter = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalized)
    );
    console.log(resultFilter);
    return resultFilter;
  };

  handleFilter = e => {
    console.log(e.currentTarget.value);
    this.setState({ filter: e.currentTarget.value });
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const visibleContact = this.contactFilter();
    console.log(visibleContact);
    const { contacts, filter } = this.state;
    return (
      <>
        <div>
          <ContactCounter>
                Phonebook <br /> <span>{contacts.length}</span> contacts
          </ContactCounter>
        </div>
        <ContactsEditor onSubmit={this.addContact} />
        <Title>Contacts</Title>

        <Filter onChange={this.handleFilter} value={filter}></Filter>

        <ContactList
          contacts={visibleContact}
          onDeliteContact={this.deleteContact}
        ></ContactList>
      </>
    );
  }
}
