import PropTypes from 'prop-types';
import { Label, Input } from './FilterStyled';

export const Filter = ({ value, onChangeFilter }) => {
  return (
    <Label htmlFor="filterId">
      Find contacts by name
      <Input
        id="filterId"
        type="text"
        name="filter"
        value={value}
        onChange={onChangeFilter}
        placeholder=" "
      />
    </Label>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};
