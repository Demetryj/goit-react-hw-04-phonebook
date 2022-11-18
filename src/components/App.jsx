import { Component } from 'react';
import { nanoid } from 'nanoid';

import Forma from '../components/Forma/Forma';
import { ListContacts } from '../components/ListContacts/ListContacts';
import { Filter } from '../components/Filter/Filter';
import { Box } from './Box';
import { Title, TitleContacts } from './Titles/TitlesStyled';

const LS_KEY = 'contacts';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const localStorageContacts = JSON.parse(localStorage.getItem(LS_KEY));

    if (localStorageContacts) {
      this.setState({ contacts: localStorageContacts });
    }
  }

  componentDidUpdate(_, prevState) {
    const { contacts } = this.state;

    if (prevState.contacts !== contacts) {
      localStorage.setItem(LS_KEY, JSON.stringify(contacts));
    }
  }

  addContacts = dataContact => {
    const { contacts } = this.state;

    if (contacts.some(contact => contact.name === dataContact.name)) {
      alert(`${dataContact.name} is already in contacts`);
      return;
    }

    this.setState(({ contacts }) => ({
      contacts: [...contacts, { ...dataContact, id: nanoid() }],
    }));
  };

  deleteContacts = id => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(contact => {
          return contact.id !== id;
        }),
      };
    });
  };
  /* Поветає масив з тими контактами, які мають відмінний id від
  id контакта, який видаляємою.
  Тобно повертає масив з тими контактами які не схожі за id, з тим, 
  який видаляємо. */

  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  getFilteredContact = () => {
    const { contacts, filter } = this.state;

    const normalyzeFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalyzeFilter)
    );
  };

  render() {
    const { filter } = this.state;

    const visibileContacts = this.getFilteredContact();

    return (
      <Box p={[4]}>
        <Title>Phonebook</Title>
        <Forma onSubmit={dataContact => this.addContacts(dataContact)} />

        <TitleContacts>Contacts</TitleContacts>
        <Filter onChangeFilter={this.changeFilter} value={filter} />
        <ListContacts
          allContacts={visibileContacts}
          onClickDelete={this.deleteContacts}
        />
      </Box>
    );
  }
}

export default App;
