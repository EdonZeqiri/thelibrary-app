import React from 'react'
import TextField from '@material-ui/core/TextField';
import { Box } from '@material-ui/core';
import Button from '@material-ui/core/Button';


export const SearchBox = props => (
    <Box p={1} display="flex" width="60%" paddingBottom="20px">
        <TextField
            id="filled-secondary"
            fullWidth
            variant="outlined"
            placeholder="Type title of a book"
            onChange={props.onSearchChange}
        />
        <Button variant="outlined" onClick={props.handleClick}>Search</Button>
    </Box>
)