import PropTypes from 'prop-types';
import { ElementList, Text, Button, Circle } from './ElementListContactsStyled';

export const ElementListContacts = ({ id, name, number, onClickDelete }) => {
  return (
    <ElementList>
      <Circle></Circle>
      <Text>
        {name}: {number}
      </Text>
      <Button type="button" onClick={() => onClickDelete(id)}>
        Delete
      </Button>
    </ElementList>
  );
};

ElementListContacts.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onClickDelete: PropTypes.func.isRequired,
};
