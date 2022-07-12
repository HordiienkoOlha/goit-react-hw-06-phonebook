import ContactForm from './ContactsForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

export const App = () => {
  return (
    <>
      <ContactForm />

      {/* <Filter /> */}
      <ContactList />
    </>
  );
};
