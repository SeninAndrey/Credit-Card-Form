import * as Yup from 'yup';

const requiredFieldMessage = 'Field is required';
const inValidCardNumberMessage: string = 'Invalid card Number';
const inValidCardHolderMessage: string = 'Invalid card Holder';
const inValidCardDateMessage: string = 'Invalid expiry date. Example: MM/YY';
const inValidCardCVVMessage: string = 'Invalid CVV';

export const FormSchema = Yup.object().shape({
    cardNumber: Yup.string()
        .length(19, inValidCardNumberMessage)
        .matches(/^[ 0-9]+$/, inValidCardNumberMessage)
        .required(requiredFieldMessage),
    cardHolder: Yup.string()
        .min(2, inValidCardHolderMessage)
        .matches(/^[a-zA-Z\s]+\s+[a-zA-Z]+$/, inValidCardHolderMessage)
        .max(30, inValidCardHolderMessage)
        .required(requiredFieldMessage),
    cardDate: Yup.string()
        .length(5, inValidCardDateMessage)
        .matches(/([0-9]{2})\/([0-9]{2})/,inValidCardDateMessage)
        .required(requiredFieldMessage),
    cardCVV: Yup.string()
        .min(3, inValidCardCVVMessage)
        .max(3, inValidCardCVVMessage)
        .required(requiredFieldMessage)
})