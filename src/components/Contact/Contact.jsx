import { useDispatch } from 'react-redux';
import { toast } from 'react-hot-toast';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { deleteContact, changeContact } from 'redux/operations';
import { setIsChanged } from 'redux/isChangedSlice';
import { useContacts, useIsChanged } from 'hooks';
import { Formik, Field } from 'formik';
import { validateSchema } from 'components/validateSchema';
import {
  ContactItem,
  ContactInfo,
  Name,
  Number,
  Form,
  FormField,
  ErrorMessage,
  Button,
  Buttons,
} from './Contact.styled';

export const Contact = ({ contact: { name, number, id } }) => {
  const dispatch = useDispatch();
  const contacts = useContacts();
  const isChanged = useIsChanged();
  const handleDelete = () => {
    confirmAlert({
      title: '',
      message: 'Are you sure?',
      buttons: [
        {
          label: 'Yes',
          onClick: () => {
            dispatch(deleteContact(id));
          },
        },
        {
          label: 'No',
          onClick: () => {},
        },
      ],
    });
  };

  const handleIsChanged = () => {
    dispatch(setIsChanged(id, true));
  };
  return (
    <ContactItem>
      <ContactInfo>
        <Name> {name}:</Name>
        <Number> {number}</Number>
        <Button onClick={handleIsChanged}>Change</Button>
        <Button onClick={handleDelete}>Delete</Button>
      </ContactInfo>
      {isChanged.id === id && isChanged.value === true && (
        <Formik
          initialValues={{
            name,
            number,
            id,
          }}
          validationSchema={validateSchema}
          onSubmit={(values, actions) => {
            if (
              contacts
                .filter(
                  contact =>
                    contact.id.toLowerCase() !== values.id.toLowerCase()
                )
                .find(
                  contact =>
                    contact.name.toLowerCase() === values.name.toLowerCase()
                )
            )
              toast.error(`${values.name} is already in contacts`);
            else {
              dispatch(changeContact(values));
              dispatch(setIsChanged(id, false));
            }
            actions.resetForm();
          }}
        >
          <Form>
            <FormField>
              Edit name
              <Field name="name" />
              <ErrorMessage name="name" component="span" />
            </FormField>
            <FormField>
              Edit number
              <Field name="number" />
              <ErrorMessage name="number" component="span" />
            </FormField>
            <Buttons>
              <Button type="submit">Change contact</Button>
              <Button
                type="button"
                onClick={() => dispatch(setIsChanged(id, false))}
              >
                Cancel changes
              </Button>
            </Buttons>
          </Form>
        </Formik>
      )}
    </ContactItem>
  );
};
