import { Component } from 'react';

import { Form, Label, Input, Button } from './FormaStyled';

class Forma extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChangeInput = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    const { name, number } = this.state;
    event.preventDefault();

    this.props.onSubmit({ name, number });

    this.reset();
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const { name, number } = this.state;

    return (
      <Form onSubmit={this.handleSubmit}>
        <Label htmlFor="nameId">
          Name
          <Input
            id="nameId"
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.handleChangeInput}
            placeholder=" "
          />
        </Label>

        <Label htmlFor="telId">
          Number
          <Input
            id="telId"
            type="tel"
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={this.handleChangeInput}
            placeholder=" "
          />
        </Label>

        <Button type="submit">Add contact</Button>
      </Form>
    );
  }
}

export default Forma;
