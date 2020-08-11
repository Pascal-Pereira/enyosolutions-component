import React, { useContext } from 'react';
import axios from 'axios';
import '../styles/tablecontent.css';
import FormContext from './FormContext';   
import ModalForm from './ModalForm'


function TableContent() {
    const { dataRetrievedFromApi, thArray, handleModalClick, rowWithModalOpen} = useContext(FormContext);
    return (
        <div className='apicontent' >
            <table >
                <thead>
                    <tr className='trheader'>
                        {thArray.map(th => {
                            return (
                                <th className='th' key={th} >
                                    {th}
                                </th>
                            )
                        })}
                    </tr>
                </thead>
                <tbody>
                        {dataRetrievedFromApi.map(item => {
                            return (
                                <tr className='trheader' key={item.id} onClick={(e) => handleModalClick(e, item.id)}>
                                    {thArray.map(th => {
                                        return (
                                            <td className='td' key={`td${th}`}>
                                                {(item[`${th}`])}
                                            </td>
                                        )
                                    })}
                                </tr>
                            )
                        })}

                            {rowWithModalOpen.id && <ModalForm />}

                </tbody>
            </table>
        </div>
    );
};

export default TableContent;
