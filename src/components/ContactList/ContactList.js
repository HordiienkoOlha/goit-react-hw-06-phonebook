import ContactItem from '../ContactsItem/ContactsItem';
import { ListGroup, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../components/redux/contacts/contactSlice';
import {
  getContactsItem,
  getContsctasFilter,
} from 'components/redux/contacts/contactsSelectors';

const ContactList = () => {
  // const getContacts = state => state.contacts.contacts.items;
  // const getFilter = state => state.contacts.contacts.filter;
  const newContacts = useSelector(getContactsItem);
  const filter = useSelector(getContsctasFilter);
  console.log(filter);

  const dispatch = useDispatch();

  const filteredContacts = () => {
    // const newFilter = filter.toLowerCase();
    if (!filter === '') {
      // return newContacts;
      // }
      // console.log(newContacts);
      return newContacts.filter(
        contact =>
          contact.name.toLowerCase().includes(filter) ||
          contact.number.includes(filter)
      );
    }
    return newContacts;
  };

  const onDeleteContacts = id => dispatch(deleteContact(id));
  const filterContacts = filteredContacts();
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
