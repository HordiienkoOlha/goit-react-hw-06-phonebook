import { useState } from 'react';
import { Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addFilter } from '../redux/contacts/contactSlice';

const Filter = () => {
  const [filter, setFilter] = useState('');

  const dispatch = useDispatch();

  const getFilterValue = event => {
    setFilter(event.target.value);
    dispatch(addFilter(filter));
  };

  const onHandlesubmit = event => {
    event.preventDefault();

    setFilter('');
  }


  return (
    <>
      <Form onSubmit={onHandlesubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Find contacts by name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Search..."
            onChange={getFilterValue}
          />
        </Form.Group>
      </Form>
    </>
  );
};

export default Filter;

// <Filter value={filter} changeFilter={getFilterValue} />
