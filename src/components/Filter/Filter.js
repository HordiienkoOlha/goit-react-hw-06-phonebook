import { useState } from 'react';
import { Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addFilter } from '../redux/contacts/contactSlice';

const Filter = () => {
  const [filter, setFilter] = useState('');
  const dispatch = useDispatch();

  const onChange = event => {
    setFilter(event.target.value.trim());
  };

  const onHandlesubmit = event => {
    event.preventDefault();
    console.log(filter)
    dispatch(addFilter(filter));

    setFilter('');
  };

  return (
    <>
      <Form onSubmit={onHandlesubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Find contacts by name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Search..."
            onChange={onChange}
          />
        </Form.Group>
      </Form>
    </>
  );
};

export default Filter;
