import { nanoid } from 'nanoid';
import { Form, Button, Card, Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { addContact } from '../../components/redux/contacts/contactSlice';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();

  const onChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value.toLowerCase());
        break;

      case 'number':
        setNumber(value.toLowerCase());
        break;

      default:
        return;
    }
  };

  const onHandleSubmit = event => {
    event.preventDefault();
    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    dispatch(addContact(newContact));

    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <>
      <Container className="p-3">
        <h1 className="header">Phonebook</h1>
        <Card style={{ width: '25rem' }}>
          <Form className="mb-3 p-2" onSubmit={onHandleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label> Name</Form.Label>
              <Form.Control
                value={name}
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                onChange={onChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Number</Form.Label>
              <Form.Control
                value={number}
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                onChange={onChange}
                required
              />
            </Form.Group>
            <Button size="lg" variant="outline-info" type="submit">
              Add contact
            </Button>
          </Form>
        </Card>
      </Container>
    </>
  );
}