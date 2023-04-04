import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactsList } from './ContactsList/ContactsList';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout/Layout';

export const App = () => {
  return (
    <Layout title="Phonebook">
      <ContactForm />
      <Filter />
      <ContactsList />
      <GlobalStyle />
    </Layout>
  );
};
