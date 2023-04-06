import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/filterSlice';
import { FilterField } from './Filter.styled';
import { useFilter } from 'hooks';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useFilter();
  const changeFilter = e => {
    dispatch(setFilter(e.currentTarget.value));
  };

  return (
    <FilterField>
      Find contacts by name
      <input type="text" value={filter} onChange={changeFilter} />
    </FilterField>
  );
};
