import styled from 'styled-components';
import { Form as FormikForm, ErrorMessage as FormikError } from 'formik';

export const ContactItem = styled.li`
  display: flex;
  flex-direction: column;
  padding: 5px;
  :nth-child(even) {
    background-color: #e9e9ed;
  }
`;

export const ContactInfo = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 5px;
  width: 100%;
`;

export const Name = styled.span``;

export const Number = styled.span`
  margin-left: auto;
`;

export const Form = styled(FormikForm)`
  padding: 8px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const FormField = styled.label`
  display: flex;
  flex-direction: column;
`;

export const ErrorMessage = styled(FormikError)`
  font-size: 14px;
  color: red;
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Button = styled.button`
  cursor: pointer;
`;
