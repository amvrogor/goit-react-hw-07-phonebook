import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../../redux/filterSlice';
import { FilterField } from './Filter.styled';
import { getFilter } from 'redux/selectors';

export const Filter = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(getFilter);
  const changeFilter = e => {
    dispatch(setFilter(e.currentTarget.value));
  };

  return (
    <FilterField>
      Find contacts by name
      <input type="text" value={filterValue} onChange={changeFilter} />
    </FilterField>
  );
};
