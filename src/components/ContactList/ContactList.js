import ContactItem from '../ContactsItem/ContactsItem';
import { ListGroup, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../components/redux/contacts/contactSlice';

const ContactList = () => {
  const getContacts = state => state.contacts.contacts.items;
  const newContacts = useSelector(getContacts);
  console.log(newContacts);
  const dispatch = useDispatch();

  const onDeleteContacts = id => dispatch(deleteContact(id));

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
