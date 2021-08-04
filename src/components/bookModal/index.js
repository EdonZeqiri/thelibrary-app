import { Box } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import React, { useState } from 'react';
import { fetchBookDescription } from '../../httpClient/books';
import "./modal-style.css";

export const BookModal = ({ book }) => {
    const [open, setOpen] = useState(false);
    const [key, setKey] = useState()
    const [editionList, setEditionList] = useState([])

    const handleClickOpen = () => {
        setOpen(true);
        renderBooksKey()
    };
    const handleClose = () => {
        setOpen(false);
    };

    const renderBooksKey = () => {
        return fetchBookDescription(book.key)
            .then((res) => {
                setKey(res.data)
            })
            .then(renderEditions())
    };

    const renderEditions = () => {
        let temp = []
        for (var i = 0; i < 5; i++) {
            temp.push(book.edition_key[i])
        }
        return setEditionList(temp)
    }


    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                See Details
            </Button>
            <Dialog
                maxWidth="xl" open={open} onClose={handleClose} aria-labelledby="form-dialog-title">

                <Box className='box__container'>
                    <Box className='container__left'>
                        <img
                            className="img"
                            width='50%'
                            src={`https://covers.openlibrary.org/b/olid/${book.cover_edition_key}-M.jpg`}
                        />
                    </Box>
                    <Box className='container__right'>
                        <p>An edition of {book.title} ({book.first_publish_year})</p>
                        <h2>{book.title}</h2>
                        <h3>by {book.author_name}</h3>

                        {(key?.description?.value !== undefined) && <p>{key?.description?.value}</p>}
                        {(key?.description?.value === undefined) && <p>{key?.description}</p>}
                        {(key === undefined) || (key?.description === undefined) && <p>This edition doesn't have a description yet</p>}


                        {editionList.length > 0 ? <p>Editions</p> : <p>No editions</p>}
                        <Box className="container__right__editions">
                            {editionList.map(edition => (
                                <Box className="card__editions__row">
                                    <img
                                        className="img__row"
                                        src={`https://covers.openlibrary.org/b/olid/${edition}-M.jpg`} />
                                </Box>
                            ))}

                        </Box>
                    </Box>

                </Box>
            </Dialog>
        </div>
    )
}

