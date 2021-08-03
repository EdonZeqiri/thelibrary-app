import { Box } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import React, { useState } from 'react';
import axios from "axios"
import "./bmodalStyle.css";
import { useEffect } from 'react';

export const BookModal = props => {
    const [open, setOpen] = useState(false);
    const [key, setKey] = useState()

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    useEffect(() => {
        axios.get(`http://openlibrary.org${props.books.key}.json`)
            .then((res) => {
                setKey(res.data)
            })
    }, [])

    return (
        <div>
            <Button data-testid="newProjectButton" variant="outlined" onClick={handleClickOpen}>
                See Details
            </Button>
            <Dialog
                maxWidth="xl" data-testid="projectsDialog" open={open} onClose={handleClose} aria-labelledby="form-dialog-title">

                <Box className='box__container'>
                    <Box className='box__container__left'>
                        <img
                            className="img"
                            width='50%'
                            src={`https://covers.openlibrary.org/b/olid/${props.books.cover_edition_key}-M.jpg`}
                        />
                    </Box>
                    <Box className='box__container__right'>

                        <h2>{props.books.title}</h2>
                        <h3>{props.books.author_name}</h3>
                        {key !== undefined ? <p>{key.description}</p> : ""}

                    </Box>
                </Box>
            </Dialog>
        </div>
    )
}

