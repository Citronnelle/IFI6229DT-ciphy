import React, { useState } from "react"
import { Button, ButtonGroup } from "@mui/material/"

export const NumberButtons = () => {
  const [stateValue, setValue] = useState()

  const subtractNumber = nr => setValue(stateValue - nr)
  const addNumber = nr => setValue(stateValue + nr)

  return (
    <>
      <h2>{stateValue}</h2>
      <ButtonGroup
        variant="contained"
        size="small"
        color="secondary"
        aria-label="small secondary button group"
      >
        <Button onClick={() => subtractNumber(1)}>-1</Button>
        <Button onClick={() => addNumber(1)}>+1</Button>
        <Button onClick={() => subtractNumber(100)}>-100</Button>
        <Button onClick={() => addNumber(100)}>+100</Button>
      </ButtonGroup>
    </>
  )
}
