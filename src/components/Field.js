import React, { useState, useContext } from 'react';
import '../styles/field.css';
import  uuid  from 'uuid';
import FormContext from './FormContext';  

function Field({ field }) {

    const { label, ...attributes } = field;
    const { updateFormObject, retrieveNewFormObjUpdated, rowWithModalOpen, dataRetrievedFromApi, upDateRowWithModalOpen } = useContext(FormContext);
    const [textareaFieldValue, setTextAreaFieldValue] = useState(rowWithModalOpen[label])
    const [inputValue, setInputValue] = useState(rowWithModalOpen[label]);



    const handleTextAreaChange = (e, id, fieldName) => {
        // console.log(' id and fielName and value', id, fieldName, e.target.value);

        upDateRowWithModalOpen({...rowWithModalOpen, [label]: e.target.value  })
        setTextAreaFieldValue(rowWithModalOpen[label]);
        // console.log(rowWithModalOpen)
    }
    const handleInputChange = (e, id, fieldName) => {
        upDateRowWithModalOpen({...rowWithModalOpen, [label]: e.target.value  })
        setInputValue(rowWithModalOpen[label]);
    }

    // const updateFormObject = () => {
        
    // }


    return (
        <div className='inputsform' >
            <label>{label}: </label>
            {(() => {
                switch (attributes.type) {
                    case 'textarea':
                        return <textarea id={rowWithModalOpen.id} onChange={(e) => handleTextAreaChange(e,rowWithModalOpen.id,attributes.field)} {...attributes}  value={textareaFieldValue}/>
                    case 'radio':
                        return (
                            <div className='radio' >
                                {dataRetrievedFromApi.map(data => {
                                    return (
                                        <div className='radiochoices' key={uuid()}>
                                            <input  {...attributes} value={data[attributes.field]} onChange={(e) => handleTextAreaChange(e,rowWithModalOpen.id,attributes.field)} />
                                            <label forHtml={data[attributes.field]}>{data[attributes.field]}</label>
                                        </div>
                                    )
                                })}
                            </div>)

                    case 'select':
                        return (
                            <select id={rowWithModalOpen.id}  >
                                {dataRetrievedFromApi.map(data => {
                                    return (
                                        <option key={uuid()} selected={ (rowWithModalOpen[attributes.field] === data[attributes.field])}  {...attributes} value={data[attributes.field]}>
                                            {(data[attributes.field])}
                                        </option>
                                    )
                                })}
                            </select>
                        )

                    default:
                        return <input id={rowWithModalOpen.id} onChange={(e) => handleInputChange(e,rowWithModalOpen.id,attributes.field)}  {...attributes} placeholder={rowWithModalOpen[attributes.field]} value={inputValue} />
                }
            })()}

        </div>

    );
};

export default Field;