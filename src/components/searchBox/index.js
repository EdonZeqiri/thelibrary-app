import React from 'react'
import TextField from '@material-ui/core/TextField';
import { Box } from '@material-ui/core';
import Button from '@material-ui/core/Button';

export const SearchBox = ({ onChange, handleClick }) => (
    <Box p={1} display="flex" width="60%" paddingBottom="20px">
        <TextField
            id="filled-secondary"
            fullWidth
            variant="outlined"
            placeholder="ex. Picasso, Lord of the rings"
            onChange={onChange}
        />
        <Button variant="outlined" onClick={handleClick}>Search</Button>
    </Box>
)