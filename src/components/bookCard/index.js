import { Box } from '@material-ui/core';
import React from 'react';
import { BookModal } from '../bookModal';
import "./card-style.css";


export const BookCard = ({ book }) => (
    <Box className='card__container'>
        <img
            width='120px'
            alt='monster'
            src={`https://covers.openlibrary.org/b/olid/${book.cover_edition_key}-M.jpg`}
        />
        <h2>{book.title}</h2>
        <h4>{book.author_name}</h4>
        <BookModal book={book} />
    </Box>
)