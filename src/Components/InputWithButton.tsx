import { Box, Button, FormControl, Input, Modal, Typography } from '@mui/material';
import React, { useState } from 'react';
import './InputWithButton.css';

const InputWithButton = () => {
    const [values,setValues] = useState({
        hash : '',
        summ : '0'
    });

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleChange = (event : React.ChangeEvent<HTMLInputElement>) => {
        setValues({...values,[event.target.name] : event.target.value});

    }
    const handleSubmit = (event : React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(values);
        
        if (values.hash === '' || values.summ === '0'){
            // alert('Одно из полей не заполнено')
            setOpen(true);
        } else {
            alert('Fine')
        }
    }


    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };
    
    return(
        <form className='formContainer' onSubmit={(e) => handleSubmit(e)}>
            <Input type='text' name='hash' placeholder='Insert hash here' onChange={handleChange}></Input>
            <Input type='number' inputProps={{min:0, max:99999999}} name='summ' placeholder='Insert value here' onChange={handleChange}></Input>
            <Button variant="outlined" type={"submit"}>Send</Button>

            <Modal
            className='modalError'
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description">
            <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
                An error has occurred
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Check the data you entered for correctness.
            </Typography>
            </Box>

            </Modal>
        </form>
    )
}

export default InputWithButton