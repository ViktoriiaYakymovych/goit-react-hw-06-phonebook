import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/selectors';
import { Lable, Input } from './Filter.styled';
import { filterContacts } from 'redux/actions';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  return (
    <Lable>
      Find contact by name
      <Input
        name="filter"
        type="text"
        value={filter}
        onChange={() => dispatch(filterContacts(filter))}
      />
    </Lable>
  );
};
