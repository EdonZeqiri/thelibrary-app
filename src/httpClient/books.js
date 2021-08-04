import axios from 'axios';

export const fetchBooks = (searchField) => {
    return axios.get(`http://openlibrary.org/search.json?q=${searchField}&limit=10`)
};

export const fetchBookDescription = (booksKey) => {
    return axios.get(`http://openlibrary.org${booksKey}.json`)
};
