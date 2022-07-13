import ContactItem from '../ContactsItem/ContactsItem';
import { ListGroup, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../components/redux/contacts/contactSlice';

const ContactList = () => {
  const getContacts = state => state.contacts.contacts.items;
  const getFilter = state => state.contacts.contacts.filter;
  const newContacts = useSelector(getContacts);
  const newFilter = useSelector(getFilter);
  const lowerFilter = newFilter.toLowerCase();
  // console.log(newContacts);
  console.log(newFilter);
  console.log(lowerFilter);
  const dispatch = useDispatch();

  // ;
  // const filteredContacts = () => {
  //  const newFilter = filter.toLowerCase();
  // return dispatch(filterContact(lowerFilter));
  // return contacts.filter(
  //   contact =>
  //     contact.name.toLowerCase().includes(newFilter) ||
  //     contact.number.includes(newFilter)
  // );
  // };

  const onDeleteContacts = id => dispatch(deleteContact(id));
  // const filterContacts = filteredContacts();
  return (
    <Container className="p-3">
      <ListGroup>
        {newContacts.map(({ id, name, number }) => (
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
