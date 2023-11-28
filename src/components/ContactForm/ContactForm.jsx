import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { addContact } from 'redux/actions';

import {
  StyledForm,
  Lable,
  StyledField,
  StyledError,
  Button,
} from './ContactForm.styled';

const schema = Yup.object().shape({
  name: Yup.string().required('Name is required field').trim(),
  number: Yup.number()
    .typeError('Must be a number')
    .required('Number is a required field'),
});

export const ContactForm = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={schema}
      onSubmit={(values, actions) => {
        dispatch(addContact(values));
        actions.resetForm();
      }}
    >
      <StyledForm>
        <Lable>
          Name
          <StyledField name="name" type="text" placeholder="Name..." />
          <StyledError component="div" name="name" />
        </Lable>
        <Lable>
          Number
          <StyledField name="number" type="tel" placeholder="Number..." />
          <StyledError component="div" name="number" />
        </Lable>
        <Button type="submit">Add new Contact</Button>
      </StyledForm>
    </Formik>
  );
};
