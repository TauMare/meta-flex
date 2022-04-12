import { Box, Button, FormControl, Input } from '@mui/material';
import React, { useState } from 'react';
import './InputWithButton.css';

const InputWithButton = () => {
    const [values,setValues] = useState({
        hash : '',
        summ : '0'
    });


    const handleChange = (event : React.ChangeEvent<HTMLInputElement>) => {
        setValues({...values,[event.target.name] : event.target.value});

    }
    const handleSubmit = (event : React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(values);
        
        if (values.hash === '' || values.summ === '0'){
            alert('Одно из полей не заполнено')
        } else {
            alert('Fine')
        }
    }

    return(
        <form className='formContainer' onSubmit={(e) => handleSubmit(e)}>
            <Input type='text' name='hash' placeholder='Insert hash here' onChange={handleChange}></Input>
            <Input type='number' inputProps={{min:0, max:99999999}} name='summ' placeholder='Insert value here' onChange={handleChange}></Input>
            <Button variant="outlined" type={"submit"}>Send</Button>
        </form>
    )
}

export default InputWithButton