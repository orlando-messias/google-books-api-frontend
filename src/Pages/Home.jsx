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
// images
import imageNotFound from '../assets/image-not-found.jpg';
// styles
import './HomeStyles.css';


// Home Component
export default function Home() {
  const [book, setBook] = useState({});
  const [books, setBooks] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [pickedBook, setPickedBook] = useState({});

  const handleSearchButtonClick = () => {
    googleAPI(book).get()
      .then(response => { setBooks(response.data.items); console.log(response.data.items) })
  };

  const handleSearchChange = (e) => {
    const book = e.target.value;
    setBook(book);
  };

  const handleModal = () => {
    setShowModal(!showModal);
  };

  const handlePickedBook = (pickedBook) => {
    setPickedBook(pickedBook);
  }

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
          {books.map((book, index) => {
            let thumbnail = '';
            (book.volumeInfo.imageLinks)
              ? thumbnail = book.volumeInfo.imageLinks.thumbnail
              : thumbnail = imageNotFound

            return (
              <BookCard key={index}
                title={book.volumeInfo.title}
                image={thumbnail}
                pageCount={book.volumeInfo.pageCount}
                publishedDate={book.volumeInfo.publishedDate}
                language={book.volumeInfo.language}
                description={book.volumeInfo.description}
                handlePickedBook={handlePickedBook}
                handleModal={handleModal}
              />
            )
          })}
        </div>
      </div>

      {showModal &&
        <ModalBookDetails
          showModal={showModal}
          handleModal={handleModal}
          pickedBook={pickedBook}
        />
      }

    </div>
  )
};