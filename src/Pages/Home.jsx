// react
import React, { useState } from 'react';
// react-icons
import { GiOpenBook } from 'react-icons/gi';
import BookCard from '../Components/BookCard';
import ModalBookDetails from '../Components/ModalBookDetails';
import SearchBar from '../Components/Searchbar';
// components
import Topbar from '../Components/Topbar';
// services
import googleAPI from '../services/googleAPI';
// styles
import './HomeStyles.css';


// Home Component
export default function Home() {
  const [book, setBook] = useState("");
  const [books, setBooks] = useState([]);

  const handleSearchButtonClick = () => {
    googleAPI(book).get()
      .then(response => { setBooks(response.data.items); console.log(response.data.items) })
  };

  const handleSearchChange = (e) => {
    const book = e.target.value;
    setBook(book);
  };

  return (
    <div className="pageContainer">

      <Topbar />

      <div className="logoContainer">
        <h2 className="logoTitleMain">Google</h2>
        <span className="logoTitleSecondary">
          Books
          <GiOpenBook className="logoBook" />
        </span>
      </div>

      <div className="searchbarContainer">
        <SearchBar
          handleSearchChange={handleSearchChange}
          handleSearchButtonClick={handleSearchButtonClick}
          book={book}
        />
      </div>

      <div className="cardContainerPage">
        <div className="cardContainer">
          {books.map(book => {
            let thumbnail = '';
            if (book.volumeInfo.imageLinks) {
              thumbnail = book.volumeInfo.imageLinks.thumbnail
            }
            return (
              <BookCard
                title={book.volumeInfo.title}
                image={thumbnail}
                pageCount={book.volumeInfo.pageCount}
                publishedDate={book.volumeInfo.publishedDate}
              />
            )
          })}
        </div>
      </div>

      <ModalBookDetails />

    </div>
  )
};