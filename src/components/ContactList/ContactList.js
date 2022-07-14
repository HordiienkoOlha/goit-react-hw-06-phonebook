import { useState, useEffect } from 'react';
import { ListGroup, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../components/redux/contacts/contactSlice';
import {
  getContactsItem,
  getContsctasFilter,
} from 'components/redux/contacts/contactsSelectors';
import ContactItem from '../ContactsItem/ContactsItem';

const ContactList = () => {
  const [filterContacts, setFilterContacts] = useState([]);
  const contacts = useSelector(getContactsItem);
  const filter = useSelector(getContsctasFilter);
  console.log(filter);

  const dispatch = useDispatch();

  useEffect(() => {
    const filteredContacts = contacts.filter(
      contact =>
        contact.name.toLowerCase().includes(filter) ||
        contact.number.includes(filter)
    );
    return setFilterContacts(filteredContacts);
  }, [filter, contacts]);

  const onDeleteContacts = id => dispatch(deleteContact(id));

  console.log(filterContacts);
  return (
    <Container className="p-3">
      <ListGroup>
        {filterContacts.map(({ id, name, number }) => (
          <ContactItem
            key={id}
            name={name}
            number={number}
            onDeleteContacts={() => onDeleteContacts(id)}
          />
        ))}
      </ListGroup>
    </Container>
  );
};

export default ContactList;
