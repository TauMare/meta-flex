import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import Link from '@mui/material/Link';
import {Container} from '@mui/material';
import InputWithButton from './Components/InputWithButton';
// function Copyright() {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center">
//       {'Copyright © '}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}.
//     </Typography>
//   );
// }

function App() {
  return (
    <Container maxWidth="sm">
      <InputWithButton></InputWithButton>
    </Container>
  );
    // <div className="App">
    //   <header className="App-header">
    //   <link
    //     rel="stylesheet"
    //     href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
    //   />
    //   <meta name="viewport" content="initial-scale=1, width=device-width" />
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.com"
    //       target="_blank"
    //       rel="noopener noreferrer"

    //     >
    //       Learn React
    //     </a>
    //     <Button variant="contained">Hello World</Button>
    //   </header>
    // </div>
}

export default App;
