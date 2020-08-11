# Documentation

## `MAIN FEATURE`

The main component TablentContent will take an API's url and a configuration that can be seen and set respectively on line 12 (array formFields in the state) and in the variable called url (line 24) of the FormContextProvider component.

Open [http://localhost:3000](http://localhost:3000) to view it in the browser, you will see a table which displays the objects (retrieved from the APi, stored in the variable dataRetrievedFromApi) and their pairs keys/values dispatched in the table, provided there are no nested-objects (more on the amelioration chapter).

When you click on a row (ie an object ), a modal will appear with the datas of the clicked object/row set in the fields values of the form according to the configuration.
## `Composent's features:`

>**1)  App :**
    Renders the TableContent

>**2) TableContent :**
    Display the table, set the table header according to the keys of the object (array named thArray), and the td for each object.
    Ternary to check if rowWithModalOpen.id exists (variable set in the state of FormContextProvider = object clicked). When clicked, the Modal renders.

>**3. FormContextProvider :**
    Manage state of datas : including the initialisation of the formFields that can be set in an array as it is, functions that handles states, other variables referenced before : dataRetrievedFromApi,  thArray, rowWithModalOpen.


>**4. ModalForm :**
    Modal of material UI with a component Form in it, 2 buttons to save form'changes and/or quit the modal.

>**5. Form :**
    Renders the Fields components based on the differents fields of the formfields configuration

>**6. Field :**
    The Field component displays the labels of the input with the formfields type's value, and the data associated (object clicked)


## `Example`

#### Example 1
Use the entries below : 
const url = 'https://jsonplaceholder.typicode.com/comments';
const formFields = [
                { type: 'select', field: 'postId', label: 'postId', required: true, disabled: false },
                { type: 'number', field: 'id', label: 'id', required: true, disabled: false },
                { type: 'text', field: 'name', label: 'name', required: true, disabled: false },
                { type: 'email', field: 'email', label: 'email', required: false, disabled: false },
                { type: 'textarea', field: 'body', label: 'body', required: false, disabled: false },
            ]

#### Example 2
Use the entries below : 
const url = 'https://jsonplaceholder.typicode.com/albums';
const formFields = [
                { type: 'number', field: 'userId', label: 'userId', required: true, disabled: false },
                { type: 'number', field: 'id', label: 'id', required: true, disabled: false },
                { type: 'textarea', field: 'title', label: 'title', required: true, disabled: false },
            ]

## `Future features:`

>**1 Saving datas:**
    Saved updated datas in the form-modal, works 50 %, improve the control of inputs.

>**2 Display:**
    Control the width/cells'ratio of the columns for display purposes

>**3 Nested Objects:**
    Extend the component's use to nested objected retrieved from the  API's url.

>**4 Images:**
    Display images loaded(link,file ?) from the API on the table

>**5 Select inputs:**
    Set unique values for options for form's updating, display has to be created.
