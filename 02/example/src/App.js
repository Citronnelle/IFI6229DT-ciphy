import './App.css';
//import Button from '@mui/material/Button';
//import Typography from '@mui/material/Typography';
import React, { useState } from 'react';
import { Button, Box, Typography } from '@mui/material/';
import { NumberButtons } from './components/NumberButtons';
import { MuiInput } from './components/MuiInput';

const App = () => {
  //const [show, setShow] = React.useState(true)
  const [show, setShow] = useState(true)

  return (
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          gap: '25px',
          height: '100vh'
        }}>
          <Button variant="contained" color="success" onClick={() => setShow(!show)}>Toggle popup { JSON.stringify(show) }</Button>
          <MimicPopup show={show} setShow={setShow}/>
          <NumberButtons/>
          <MuiInput/>
      </Box>
  );
}

//const MimicPopup = ({ show }) => {
//  if(show === true){
//    return <h1>Showing</h1>
//  } else {
//    return <h1>Hidden</h1>
//  }
//}

// Ternary operator
//const MimicPopup = ({ show }) => {
//  return (
//    <>
//      { show ? 'Showing' : 'Hidden' }
//    </>
//  )
//}

//const MimicPopup = ({ show }) => {
//  return (
//      <Typography>
//        {show ? 'Showing' : 'Hidden'}
//      </Typography>
//  )
//}

const MimicPopup = ({ show, setShow }) => {
    return (
      <>
          { show && 
            <>
              <Typography>Showing popup</Typography>
              <Button variant="contained" color="success" onClick={() => setShow(false)}>Hide popup</Button>
            </>
          }
      </>
    )
  }

export default App;

//import './App.css';

//const App = () => {
//  return (
//    <div className="App">
//      <header className="App-header">
//        <h1>Hello world!</h1>
//        <PropExample name='Taix'></PropExample>
//        <PropExample/>
//      </header>
//    </div>
//  );
//}

// 1. võimalus
//const PropExample = (props) => <h1>Hello {props.name}</h1>

// 2. võimalus
// const PropExample = (props) => {
//   const { name } = props
// 
//   return <h1>Hello {name}</h1>
// }

// 3. võimalus
//const PropExample = ({ name }) => <h1>Hello {name}</h1>

//export default App;
