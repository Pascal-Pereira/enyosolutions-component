import React, { useContext } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormContext from './FormContext';  
import Form from './Form';

export default function ModalForm() {
    const { dataRetrievedFromApi, rowWithModalOpen, closeModal, closeAndSaveModal } = useContext(FormContext);

    return (
        <Dialog
            fullWidth
            open={!!rowWithModalOpen.id}
            keepMounted
            onClose={closeModal}
            aria-labelledby="alert-dialog-slide-title"
            aria-describedby="alert-dialog-slide-description"
        >
            <DialogTitle id="alert-dialog-slide-title" style={{ textAlign: "center" }}>{"Informations about the data you clicked on"}</DialogTitle>
            <DialogContent>
                <Form rowWithModalOpen={rowWithModalOpen} dataRetrievedFromApi={dataRetrievedFromApi} />
            </DialogContent>
            <DialogActions>
                <Button
                    type='submit'
                    fullWidth
                    variant='contained'
                    color='primary'
                    style={{ backgroundColor: 'grey' }}
                    onClick={closeAndSaveModal}
                >
                    Save and exit
                </Button>
                <Button
                    type='submit'
                    fullWidth
                    variant='contained'
                    color='primary'
                    style={{ backgroundColor: '#CF1E6F' }}
                    onClick={closeModal}
                >
                Exit without saving
                </Button>
            </DialogActions>
        </Dialog>
    );
}
