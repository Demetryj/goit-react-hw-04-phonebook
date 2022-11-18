import PropTypes from 'prop-types';
import { ElementListContacts } from '../ElementListContacts/ElementListContacts';
import { List } from './ListContactsStyled';

export const ListContacts = ({ allContacts, onClickDelete }) => {
  return (
    <List>
      {allContacts.map(({ name, number, id }) => (
        <ElementListContacts
          key={id}
          name={name}
          number={number}
          id={id}
          onClickDelete={() => onClickDelete(id)}
        />
      ))}
    </List>
  );
};

ListContacts.propTypes = {
  allContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onClickDelete: PropTypes.func.isRequired,
};
