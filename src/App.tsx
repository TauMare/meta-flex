import React from 'react';
import {Container, Grid} from '@mui/material';
import InputWithButton from './Components/InputWithButton';


function App() {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: '100vh' }}
    >
      <Grid item xs={3}>
      <Container maxWidth="sm">
      <InputWithButton></InputWithButton>
    </Container>
    </Grid>
    </Grid>
    
  );
}

export default App;
