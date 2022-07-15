// import { useState, useEffect } from 'react';
import { ListGroup } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../components/redux/contacts/contactSlice';
import {
  getContactsItem,
  getContsctasFilter,
} from 'components/redux/contacts/contactsSelectors';
import ContactItem from '../ContactsItem/ContactsItem';

const ContactList = () => {
  const contacts = useSelector(getContactsItem);
  const filter = useSelector(getContsctasFilter);
  const lowerCaseFilter = filter.toLowerCase();

  const dispatch = useDispatch();

  const onFilteredContacts = () => {
    return contacts.filter(
      contact =>
        contact.name.toLowerCase().includes(lowerCaseFilter) ||
        contact.number.includes(lowerCaseFilter)
    );
  };

  const onDeleteContacts = id => dispatch(deleteContact(id));
  
  const filteredContacts = onFilteredContacts();

  return (
    <>
      <ListGroup>
        {filteredContacts.map(({ id, name, number }) => (
          <ContactItem
            key={id}
            name={name}
            number={number}
            onDeleteContacts={() => onDeleteContacts(id)}
          />
        ))}
      </ListGroup>
    </>
  );
};

export default ContactList;
