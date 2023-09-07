
import React, { useEffect } from 'react';
import { Section } from './Section/Section';
import { Filter } from './Filter/Filter';
import { ContactForm } from './Forms/ContactForm';
import { ContactList } from './ContactList/ContactList';
import Notiflix from 'notiflix';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts, addContact, deleteContact } from '../redux/operations';
import {updateFilter} from '../redux/contactsSlice'
import { nanoid } from '@reduxjs/toolkit';
import RegistrForm from './Forms/RegistrForm';
import LoginForm from './Forms/LoginForm';
import Header from './Header';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navigation from './Navigation';

export const App = () => {
  const contacts = useSelector(state => state.contacts.contacts.items);
  const filter = useSelector(state => state.contacts.filter);
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
    dispatch(updateFilter(e.target.value));
  };

  const onDelete = contactId => {
    dispatch(deleteContact(contactId));
  };

 useEffect(() => {
    dispatch(fetchContacts());
 }, [dispatch]);
  
  return (
    <Router>
       <Navigation />
        <Routes>
          <Route path="/register" element={<RegistrForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/contacts" element={<ContactForm />} />
          <Route path="/*" element={<Navigate to="/contacts" />} /> 
        </Routes>
      {/* <Header></Header>
      <RegistrForm></RegistrForm>
      <LoginForm></LoginForm> */}
      {/* <Section title="Phonebook">
        <ContactForm onSubmit={addContactHandler} />
      </Section>

      <Section title="Contacts">
        <Filter filter={filter} handleChange={filterChangeHandler} />
        <ContactList contacts={filteredContacts} onDelete={onDelete} />
      </Section> */}
    </Router>
  );
};
