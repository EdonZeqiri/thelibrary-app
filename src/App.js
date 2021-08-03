import { useEffect, useState } from 'react';
import axios from 'axios'
import './App.css';
import { SearchBox } from './components/searchBox';
import { BookCard } from './components/bookCard';
import { BooksList } from './components/booksList';
import ScaleLoader from "react-spinners/ScaleLoader"
import { css } from "@emotion/react";


const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;


function App() {

  const [books, setBooks] = useState([])
  const [searchField, setSearchField] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [color, setColor] = useState("#000000")


  const onSearchChange = e => {
    setSearchField(e.target.value)
  }
  const handleClick = () => {
    setIsLoading(true)
    axios.get(`http://openlibrary.org/search.json?q=${searchField}&limit=10`)
      .then((res) => {
        setBooks(res.data.docs)
      })
  }
  console.log('books', books)
  return (
    <div className="App">
      <h1>Library App</h1>
      <SearchBox handleClick={handleClick} onSearchChange={onSearchChange} />
      {books.length > 0 ? <BooksList books={books} /> : !isLoading ? <p>You haven't search any books</p> : ""}
      {isLoading > 0 ? <ScaleLoader color={color} loading={true} css={override} size={150} /> : ""}
    </div>
  );
}

export default App;
