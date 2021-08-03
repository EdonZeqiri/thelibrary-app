import React from 'react'
import { Box } from '@material-ui/core';
import "./bcardStyle.css"
import { BookModal } from '../bookModal';


export const BookCard = props => (
    <Box className='card__container' onClick={() => { console.log('onClick', props.book.title) }}>
        <img
            width='120px'
            // height='120px'
            alt='monster'
            src={`https://covers.openlibrary.org/b/olid/${props.book.cover_edition_key}-M.jpg`}
        />
        <h2>{props.book.title}</h2>
        <h4>{props.book.author_name}</h4>
        <BookModal books={props.book} />
    </Box>
)