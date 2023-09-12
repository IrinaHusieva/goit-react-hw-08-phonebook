import Notiflix from 'notiflix';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts, addContact, deleteContact } from '../redux/contacts/operations';
import { nanoid } from '@reduxjs/toolkit';
import React, { useEffect } from 'react';
import { Section } from '../components/Section/Section';
import { Filter } from '../components/Filter/Filter';
import { ContactForm } from '../components/Forms/ContactForm';
import { ContactList } from '../components/ContactList/ContactList';
import { setFilterValue } from '../redux/filterSlice';
import {UserMenu} from 'components/UserMenu';

export const Contacts = () => {
  const contacts = useSelector(state => state.contacts.items);
 const filter = useSelector(state => state.filter); 

  const dispatch = useDispatch();

 const filteredContacts = contacts.filter(contact =>
  contact.name && contact.name.toLowerCase().includes(filter.toLowerCase())
);


  const addContactHandler = ({ name, number }) => {
    const existingContact = contacts.find(contact => contact.name && contact.name.toLowerCase() === name.toLowerCase());

    if (existingContact) {
      Notiflix.Notify.failure(`${name} is already in contacts`);
    return;
    }

    dispatch(addContact({ id: nanoid(), name, number }));
  };

 const filterChangeHandler = e => {
  dispatch(setFilterValue(e.target.value));
};


  const onDelete = contactId => {
    dispatch(deleteContact(contactId));
  };

 useEffect(() => {
    dispatch(fetchContacts());
 }, [dispatch]);
  
  return (
    <>
      <UserMenu></UserMenu>
      <Section title="Phonebook">
        <ContactForm onSubmit={addContactHandler} />
      </Section>

      <Section title="Contacts">
        <Filter filter={filter} handleChange={filterChangeHandler} />
        <ContactList contacts={filteredContacts} onDelete={onDelete} />
      </Section> 
</>
  );
};