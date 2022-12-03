import { useState, useEffect, useRef, useMemo } from 'react';
import { nanoid } from 'nanoid';

import { Forma } from '../components/Forma/Forma';
import { ListContacts } from '../components/ListContacts/ListContacts';
import { Filter } from '../components/Filter/Filter';
import { Box } from './Box';
import { Title, TitleContacts } from './Titles/TitlesStyled';

const LS_KEY = 'contacts';

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem(LS_KEY)) ?? '';
  });
  const [filter, setFilter] = useState('');

  let isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    localStorage.setItem(LS_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const addContacts = dataContact => {
    if (contacts.some(contact => contact.name === dataContact.name)) {
      alert(`${dataContact.name} is already in contacts`);
      return;
    }

    setContacts(prevContacts => [
      ...prevContacts,
      { ...dataContact, id: nanoid() },
    ]);
  };

  const deleteContacts = id => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => {
        return contact.id !== id;
      })
    );
  };

  /* Поветає масив з тими контактами, які мають відмінний id від
  id контакта, який видаляємою.
  Тобно повертає масив з тими контактами які не схожі за id, з тим, 
  який видаляємо. */

  const changeFilter = event => {
    setFilter(event.currentTarget.value);
  };

  const visibileContacts = useMemo(() => {
    const normalyzeFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalyzeFilter)
    );
  }, [contacts, filter]);

  return (
    <Box p={[4]}>
      <Title>Phonebook</Title>
      <Forma onSubmit={addContacts} contacts={contacts} />

      <TitleContacts>Contacts</TitleContacts>
      <Filter onChangeFilter={changeFilter} value={filter} />
      <ListContacts
        allContacts={visibileContacts}
        onClickDelete={deleteContacts}
      />
    </Box>
  );
};
