import React from 'react';

export const ContactList = ({ contacts, onDeliteContact }) => (
  <ul>
    {contacts.map(({ id, name, number }) => (
      <li key={id}>
        <p>
          {name}: {number}
        </p>
        <br />
        <button onClick={() => onDeliteContact(id)}>Delete</button>
      </li>
    ))}
  </ul>
);
