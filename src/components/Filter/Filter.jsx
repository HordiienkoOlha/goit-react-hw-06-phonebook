import { useState } from 'react';
import { Form, Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { filterContact } from '../redux/contacts/contactSlice';

const Filter = () => {
  const [filter, setFilter] = useState('');
  const dispatch = useDispatch();

  const getFilterValue = event => {
    setFilter(event.target.value);
    dispatch(filterContact(filter))
  };
  //   const onHandleSubmit = event => {
  //   event.preventDefault();
  //   // const newContact = {
  //   //   id: nanoid(),
  //   //   name,
  //   //   number,
  //   // };

  //   //   dispatch(addContact(newContact));
      
  // };

  return (
    <Container className="p-3">
      <Form >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Find contacts by name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Search..."
            onChange={getFilterValue}
          />
        </Form.Group>
      </Form>
    </Container>
  );
};

export default Filter;

// <Filter value={filter} changeFilter={getFilterValue} />
