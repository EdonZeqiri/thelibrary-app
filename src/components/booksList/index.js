import { Box } from '@material-ui/core';
import React from 'react';
import { BookCard } from '../bookCard';
import "./list-style.css";

export const BooksList = ({ books }) => (
    <Box className='books__list'>
        {books.map(book => (
            <BookCard key={book.id} book={book} />
        ))}
    </Box>
)