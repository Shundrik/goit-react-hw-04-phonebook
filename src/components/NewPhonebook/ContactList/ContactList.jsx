import React from 'react';

import styled from 'styled-components';

const ContactsList = styled.ul`
  margin: 0;
  padding: 0;
`


const ContactItem = styled.li`
  display: flex;
  align-items: center;
justify-content:space-between;
height: 30px;
margin: 10px;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid white;
  transition: cubic-bezier(0.075, 0.82, 0.165, 1);
  transform: scale(1, 1);

  &:hover{

    transform: scale(1, 1.1);
    transition: cubic-bezier(0.075, 0.82, 0.165, 1);
  }

 `

const ButtonItem = styled.button`

justify-content: center;

padding: 2px 15px;
border-radius:5px;
background-color: white;
&:hover{
box-shadow: inset -5px 10px 20px gold;
}
`

export const ContactList = ({ contacts, onDeliteContact }) => (
  <ContactsList>
    {contacts.map(({ id, name, number }) => (
      <ContactItem key={id}>
        <p>
          {name}: {number}
        </p>
        <ButtonItem onClick={() => onDeliteContact(id)}>Delete</ButtonItem>
      </ContactItem>
    ))}
  </ContactsList>
);
