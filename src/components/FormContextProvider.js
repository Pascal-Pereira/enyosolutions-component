import React, { useContext } from 'react';
import FormContext from './FormContext';
import axios from 'axios';

class FormContextProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            thArray: [], // Array of primary keys : id, title, name...
            dataRetrievedFromApi: [],
            rowWithModalOpen: { id: null }, // Object of the dataretievd whom row was clicked
            formFields: [
                { type: 'number', field: 'postId', label: 'postId', required: true, disabled: false },
                { type: 'number', field: 'id', label: 'id', required: true, disabled: false },
                { type: 'text', field: 'name', label: 'name', required: true, disabled: false },
                { type: 'email', field: 'email', label: 'email', required: false, disabled: false },
                { type: 'textarea', field: 'body', label: 'body', required: false, disabled: false },
            ],
            formObject: {}
        };
    }

    componentDidMount = () => {
        const url = 'https://jsonplaceholder.typicode.com/comments';
        axios.get(url)
            .then(res => res.data)
            .then(data => {
                this.setState({ thArray: Object.keys(data[0]) })
                this.setState({ dataRetrievedFromApi: data })
            })
            .catch(err => {
                console.error(err);
            })
    }

    upDateRowWithModalOpen = (obj) => {
        this.setState({rowWithModalOpen: obj})
    }

    handleModalClick = (e, id) => {
        const dataRetrievedFromApi = this.state.dataRetrievedFromApi;
        const elementSelected = this.state.dataRetrievedFromApi.filter(element => element.id === id);
        this.setState({ rowWithModalOpen: elementSelected[0] })
    }

    closeModal = () => {
        this.setState({ rowWithModalOpen: {} })
    }

    closeAndSaveModal = (arrayUpdatedData) => {
        const id = this.state.rowWithModalOpen.id;
        const obj = this.state.rowWithModalOpen
        //function to retrieved e.target.value : textAreaValue inputValue
        const newDataRetrieved = this.replaceFormObj(id,obj)
        this.setState({ dataRetrievedFromApi: newDataRetrieved })
        this.closeModal()
    }

    retrieveNewFormObjUpdated = (obj, id, fieldName, value) => {
        return this.state.formObject
    }

    replaceFormObj = (id, obj) => {
        const dataRetrievedFromApi = this.state.dataRetrievedFromApi
        let resultArray = [];
        for (let i=0; i<dataRetrievedFromApi.length; i++) {
            if (dataRetrievedFromApi[i].id === id) {
                resultArray.push(obj)
            }
            else {
                resultArray.push(dataRetrievedFromApi[i])
            }
        }
        console.log('result array', resultArray)
        return resultArray
    }


    render() {
        return (
            <FormContext.Provider value={{ ...this.state, updateFormObject: this.updateFormObject, retrieveNewFormObjUpdated: this.retrieveNewFormObjUpdated, closeModal:this.closeModal, handleModalClick:this.handleModalClick, closeAndSaveModal:this.closeAndSaveModal, upDateRowWithModalOpen: this.upDateRowWithModalOpen}}>
                {this.props.children}
            </FormContext.Provider>
        );
    };
}

export default FormContextProvider;