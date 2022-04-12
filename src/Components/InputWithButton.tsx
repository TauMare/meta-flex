import { Box, Button, Input } from '@mui/material';
import React from 'react';

type State = {
    text: string;
  };

class InputWithButton extends React.Component<{}, State>{
    // constructor(props) {
    //     super(props);
    //     this.state = {value: ''};
    
    //     this.handleChange = this.handleChange.bind(this);
    //     this.handleSubmit = this.handleSubmit.bind(this);
    //   }
    // constructor(props){
    //     super(props)
    //     this.state = {
    //         text: "",
    //       };
    // }
    
    state = {
        text: "",
      };
    onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        this.setState({ text: e.currentTarget.value });
      };
    send():void{
        alert(this.state)
    }
    render() {
        return(
        <Box sx={{ my: 4 }}>
            <Input name='someHash' placeholder='Insert your hash here' value={this.state.text} onChange={this.onChange}></Input>
            <Button variant="outlined" onClick={this.send}>Send</Button>
        </Box>
    )
    }
}

export default InputWithButton

// import { Box, Button, Input } from '@mui/material';
// import React from 'react';

// function InputWithButton(){
//     return(
//     <Box sx={{ my: 4 }}>
//         <Input name='someHash' placeholder='Insert your hash here'></Input>
//         <Button variant="outlined">Send</Button>
//     </Box>
//     )
// }

// export default InputWithButton