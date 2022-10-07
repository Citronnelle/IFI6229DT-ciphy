import "./App.css"
import React, { useState } from "react"
import { Button, Box, Typography } from "@mui/material/"
import { NumberButtons } from "./components/NumberButtons"
import { MuiInput } from "./components/MuiInput"

const App = () => {
  const [show, setShow] = useState(true)

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: "25px",
        height: "100vh"
      }}
    >
      <Button
        variant="contained"
        color="success"
        onClick={() => setShow(!show)}
      >
        Toggle popup {JSON.stringify(show)}
      </Button>
      <MimicPopup
        show={show}
        setShow={setShow}
      />
      <NumberButtons />
      <MuiInput />
    </Box>
  )
}

const MimicPopup = ({ show, setShow }) => {
  return (
    <>
      {show && (
        <>
          <Typography>Showing popup</Typography>
          <Button
            variant="contained"
            color="success"
            onClick={() => setShow(false)}
          >
            Hide popup
          </Button>
        </>
      )}
    </>
  )
}

export default App
