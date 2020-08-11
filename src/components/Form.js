import React, { useContext } from 'react';
import Field from './Field';
import '../styles/form.css';
import uuid from 'uuid';
import FormContext from './FormContext';    

function Form() {
    const { formFields } = useContext(FormContext);
    return (
        <form className='form' >
            {formFields.map(ff => {
                return (
                    <Field key={uuid()} field={ff}  />
                )
            })}
        </form>
    );
};

export default Form;