// import PropTypes from 'prop-types';
import { Form, Container} from 'react-bootstrap';

const Filter = () => {
    // const [filter, setFilter] = useState('');
  // const changeFilter = () => {
    
  // }
  return (
          <Container className="p-3">
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Find contacts by name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Search..."
          // onChange={changeFilter}
        />
      </Form.Group>
      </Form>
      </Container>
  );
};


export default Filter;