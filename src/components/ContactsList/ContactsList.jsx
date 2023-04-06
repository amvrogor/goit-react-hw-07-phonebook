import { useFilteredContacts } from 'hooks';
import { Contact } from '../Contact/Contact';
import { List, Title } from './ContactsList.styled';

export const ContactsList = () => {
  const contacts = useFilteredContacts();
  return (
    <>
      <Title>Contacts</Title>
      {contacts.length !== 0 && (
        <List>
          {contacts.map(contact => (
            <Contact key={contact.id} contact={contact} />
          ))}
        </List>
      )}
    </>
  );
};
