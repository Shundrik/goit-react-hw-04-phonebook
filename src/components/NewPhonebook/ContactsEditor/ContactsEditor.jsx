// import { nanoid } from 'nanoid';
import React from 'react';
import styled from 'styled-components';

const CreateContactForm = styled.form`
  display: flex;
  flex-direction: column;
`;
const CreateContactFormlabel = styled.label`
  margin: 5px;
`;
const CreateContactFormInput = styled.input`
  margin: 5px;
  border-radius: 5px;
`;
const Button = styled.button`
margin: 0 auto;
justify-content: center;
max-width: 120px;
margin-top:10px;
padding: 5px 15px;
border-radius:5px;
background-color: white;
&:hover{
box-shadow: inset -5px 10px 20px gold;
}
  

`

export class ContactsEditor extends React.Component {
  state = {
    name: '',
    number: '',
  };
  // const id = nanoid();

  handleChangeName = e => {
    this.setState({ name: e.currentTarget.value });
  };
  handleChangeNumber = e => {
    this.setState({ number: e.currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;
    console.log(this.state);
    console.log({ name });
    this.props.onSubmit({ name, number });
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <div>
        <CreateContactForm onSubmit={this.handleSubmit}>
          <CreateContactFormlabel htmlFor="nameContact">
            Name
          </CreateContactFormlabel>
          <CreateContactFormInput
            onChange={this.handleChangeName}
            value={this.state.name}
            type="text"
            name="nameContact"
            // name="name"
            // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            // title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            // required
          ></CreateContactFormInput>

          <CreateContactFormlabel htmlFor="number">
            Phone number
          </CreateContactFormlabel>

          <CreateContactFormInput
            onChange={this.handleChangeNumber}
            value={this.state.number}
            type="tel"
            name="number"
            // name="text"
            // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            // title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            // required>
          ></CreateContactFormInput>
          <Button type="submit"> Add contact</Button>
        </CreateContactForm>
      </div>
    );
  }
}
