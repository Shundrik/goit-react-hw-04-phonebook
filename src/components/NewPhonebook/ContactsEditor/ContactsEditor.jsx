// import { nanoid } from 'nanoid';
import React from 'react';

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
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="">Name</label>
          <br />
          <input
            onChange={this.handleChangeName}
            value={this.state.name}
            type="text"
            // name="name"
            // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            // title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            // required
          />
          <br />

          <label htmlFor="">Phone number</label>
          <br />
          <input
            onChange={this.handleChangeNumber}
            value={this.state.number}
            type="tel"
            // name="text"
            // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            // title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            // required
          />
          <br />
          <button type="submit"> add contact</button>
        </form>
      </div>
    );
  }
}
