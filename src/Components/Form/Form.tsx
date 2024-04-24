import React from 'react';
import './form.css';
// import ReactDOM from 'react-dom';
import InputMask from 'react-input-mask';
import { Formik, Field, Form } from 'formik';
import creditCardType from 'credit-card-type';
import { FormSchema } from '../../Yup.ts'
import { useDispatch, useSelector } from 'react-redux';
import { updateCardValues } from '../../Store/cardSlice.ts';

export function CardForm () {

    const dispatch = useDispatch();
    const form = useSelector((state) => state.card.card);
    

    const handleChange = (field) => (event) => {
        dispatch(updateCardValues({ field, value: event.target.value }));
        console.log(event.target.value);
        
    }

    const handleBlur = (cardNumber) => {
        if (creditCardType(cardNumber)[0]) {
            return creditCardType(cardNumber)[0].type;
        }
    }
    console.log(form);
    return (
        <div className='formContainer'>
            <h2 className='formTitle'>
                {'Card details'}
            </h2>
            <Formik
                initialValues = { form }
                enableReinitialize={true}
                validationSchema={FormSchema}
                validateOnMount
                validateOnBlur
                onSubmit={ (values) => {
                    alert(JSON.stringify(values, null, 2));
                }}
            >
                {({ values, errors, touched }) => (
                    <Form className='form'>
                        <label htmlFor='cardNumber' className='formLabel'>Card number</label>
                        <Field name='cardNumber'>
                            {
                                ({ field }) => 
                                    <InputMask 
                                        {...field}
                                        id="cardNumber"
                                        type="text"
                                        values = {form.cardNumber}
                                        mask="9999 9999 9999 9999"
                                        maskChar={null}
                                        placeholder='**** **** **** ****'
                                        className={`formInput ${errors.cardNumber && touched.cardNumber ? 'formInvalid' : 'formInputDefault'}`}
                                        onChange={handleChange('cardNumber')}
                                    />
                            }
                        </Field>
                        {errors.cardNumber && touched.cardNumber && (
                            <div className='formInvalidText'>{errors.cardNumber}</div>
                        )}

                        <label htmlFor='cardHolder' className='formLabel'>Name</label>
                        <Field name='cardHolder'>
                            {
                                ({ field }) => 
                                    <InputMask 
                                        {...field}
                                        id="cardHolder"
                                        type="text"
                                        value = {form.cardHolder}
                                        maskChar={null}
                                        className={`formInput ${errors.cardHolder && touched.cardHolder ? 'formInvalid' : 'formInputDefault'}`}
                                        onChange={handleChange('cardHolder')}
                                    />
                            }
                        </Field>    
                        {errors.cardHolder && touched.cardHolder && (
                            <div className='formInvalidText'>{errors.cardHolder}</div>
                        )}                 

                        <label htmlFor='cardDate' className='formLabel'>Expiry date</label>
                        <Field name='cardDate'>
                            {
                                ({ field }) => 
                                    <InputMask 
                                        {...field}
                                        id="cardDate"
                                        type="text"
                                        value = {form.cardDate}
                                        mask="99/99"
                                        maskChar={null}
                                        placeholder='**/**'
                                        className={`formInput ${errors.cardDate && touched.cardDate ? 'formInvalid' : 'formInputDefault'}`}
                                        onChange={handleChange('cardDate')}
                                    />
                            }
                        </Field>
                        {errors.cardDate && touched.cardDate && (
                            <div className='formInvalidText'>{errors.cardDate}</div>
                        )}

                        <label htmlFor='cardCVV' className='formLabel'>CVV</label>
                        <Field name='cardCVV'>
                            {
                                ({ field }) => 
                                    <InputMask 
                                        {...field}
                                        id="cardCVV"
                                        type="text"
                                        value = {form.cardCVV}
                                        mask="999"
                                        maskChar={null}
                                        placeholder='***'
                                        className={`formInput ${errors.cardCVV && touched.cardCVV ? 'formInvalid' : 'formInputDefault'}`}
                                        onChange={handleChange('cardCVV')}
                                    />
                            }
                        </Field>
                        {errors.cardCVV && touched.cardCVV && (
                            <div className='formInvalidText'>{errors.cardCVV}</div>
                        )}
                    </Form>
                )} 
            </Formik>
        </div>
    )
}