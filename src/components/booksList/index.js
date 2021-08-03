import React from 'react'
import { BookCard } from '../bookCard'
import { Box } from '@material-ui/core';
import "./blistStyle.css"

export const BooksList = props => (
    <Box className='books__list'>
        {props.books.map(book => (
            <BookCard key={book.id} book={book} />
        ))}
    </Box>
)