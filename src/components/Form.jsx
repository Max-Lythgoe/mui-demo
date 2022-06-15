import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import React, {useState} from 'react'

const Form = () => {
    const [name, setName] = useState("")
    const [status, setStatus] = useState("")

    const handleName = (e) => setName(e.target.value) 
    const handleStatus = (e) => setStatus(e.target.value) 

    const handleClick = () => {
        console.log("name:", name)
        console.log("status:", status)
    }

  return (
    <Box sx={{display: "flex", flexDirection: "column", gap: 2}}>
        <Typography variant="h3">My simple form</Typography>
        <TextField variant="filled" placeholder="What's your name?" onChange={handleName} />
        <FormControl>
            <InputLabel id="statusLabel">Select a Status</InputLabel>
            <Select
                labelId="statusLabel"
                id="status"
                value={status}
                onChange={handleStatus}
                variant="filled"
                >
                    <MenuItem value="">None</MenuItem>
                    <MenuItem value="Cool">Cool</MenuItem>
                </Select>
        </FormControl>
        <Button variant="contained" onClick={handleClick}>Submit</Button>
    </Box>
  )
}

export default Form