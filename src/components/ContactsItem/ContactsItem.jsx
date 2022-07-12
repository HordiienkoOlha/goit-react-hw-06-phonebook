import { ListGroup, Button, Stack } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

import { deleteContact } from '../../components/redux/contacts/contactSlice';

const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <ListGroup.Item>
      <Stack direction="horizontal" gap={2}>
        <p>
          {name} : {number}
        </p>
        <Button
          variant="outline-info"
          type="button"
          className="ms-auto"
          onClick={() => dispatch(deleteContact(id))}
        >
          Delete
        </Button>
      </Stack>
    </ListGroup.Item>
  );
};

export default ContactItem;
