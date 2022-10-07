import React, { useState } from 'react';
import { Input } from '@mui/material';

export const MuiInput = () => {
    const [stateValue, setValue] = useState("")

    return <>
        <h2>{  JSON.stringify(stateValue) }</h2>
        <Input onChange={(event) => setValue(event.target.value)}/>
    </>;
}