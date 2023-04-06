import { useSelector } from 'react-redux';
import {
  selectContacts,
  selectFilteredContacts,
  selectIsChanged,
} from 'redux/selectors';

export const useContacts = () => useSelector(selectContacts);
export const useFilteredContacts = () => useSelector(selectFilteredContacts);
export const useIsChanged = () => useSelector(selectIsChanged);
