import { css } from "@emotion/react";
import { useEffect, useState } from 'react';
import ScaleLoader from "react-spinners/ScaleLoader";
import './App.css';
import { BooksList } from './components/booksList';
import { SearchBox } from './components/searchBox';
import { fetchBooks } from "./httpClient/books";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;


function App() {

  const [books, setBooks] = useState([])
  const [searchField, setSearchField] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const color = "#000000"


  const onChange = e => {
    setSearchField(e.target.value)
  }
  const handleClick = async () => {
    setIsLoading(true)
    fetchBooks(searchField)
      .then((res) => {
        setBooks(res.data.docs)
      })
  }

  useEffect(() => {
    if (books.length > 0) {
      setIsLoading(false)
    }
  }, [books])


  return (
    <div className="App">
      <h2 className="title">Library App</h2>
      <SearchBox handleClick={handleClick} onChange={onChange} />

      {!isLoading && books.length < 1 && <p className="paragraph" >You haven't search any books</p>}
      {isLoading && <ScaleLoader color={color} loading={true} css={override} size={150} />}
      {!isLoading && books.length > 0 && <BooksList books={books} />}

    </div>
  );
}

export default App;
