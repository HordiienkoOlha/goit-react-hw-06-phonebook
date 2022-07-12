import ContactItem from '../ContactsItem/ContactsItem';
import { ListGroup } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const ContactList = () => {
  const getContacts = state => state.contacts.contacts.items;
  const newContacts = useSelector(getContacts);

  return (
    <ListGroup>
      {newContacts.map(({ id, name, number }) => (
        <ContactItem key={id} name={name} number={number} />
      ))}
    </ListGroup>
  );
};

export default ContactList;
