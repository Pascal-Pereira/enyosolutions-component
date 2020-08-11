import React from 'react';
import TableContent from './components/TableContent'
import FormContextProvider from './components/FormContextProvider';

function App (props){
  return(
      <FormContextProvider>
        <div className="App">
          <TableContent/>
        </div>
      </FormContextProvider>
  );
};

export default App;

