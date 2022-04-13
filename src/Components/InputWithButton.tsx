import { Box, Button, FormControl, Input, Modal, Typography } from '@mui/material';
import React, { useState } from 'react';
import './InputWithButton.css';
import { MetaMaskInpageProvider } from "@metamask/providers";

declare global {
    interface Window {
      ethereum: MetaMaskInpageProvider;
    }
  }

const InputWithButton = () => {
    const ethereum = window.ethereum;
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
    const sendTransaction = async (params:Object[]) => {
        const result = await ethereum.request(
            {
                method:'eth_sendTransaction',
                params
            }
            )
        return result
    }
    const handleSubmit = async (event : React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(values);
        
        if (values.hash === '' || values.summ === '0'){
            setOpen(true);
        } else {
            alert('Fine')
            if (ethereum){
                if(ethereum.isMetaMask){
                    // ethereum.on('accountsChanged', function(accounts:any){
                    //     console.log(accounts[0]);
                    // })
                    console.log(ethereum.selectedAddress);
                    console.log(await sendTransaction(
                        [
                            {
                              from: ethereum.selectedAddress,
                              to: values.hash,
                              gas: '1', // 30400
                              gasPrice: '2', // 10000000000000
                              value: values.summ, // 2441406250
                              data:
                                '0xd46e8dd67c5d32be8d46e8dd67c5d32be8058bb8eb970870f072445675058bb8eb970870f072445675',
                            },
                          ]
                        )
                    );
                }
            }
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