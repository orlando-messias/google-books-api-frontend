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
  const [isFavoriteBook, setIsFavoriteBook] = useState(false);
  const [totalItems, setTotalItems] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const handleSearchButtonClick = () => {
    googleAPI(book, 0).get()
      .then(response => {
        setBooks(response.data.items);
        setTotalItems(response.data.totalItems);
      });
  };

  const handlePageNumberClick = (e) => {
    const pageNumber = Number(e.target.id);
    setCurrentPage(pageNumber);
    const startIndex = (pageNumber * 20) - 20;

    console.log(startIndex);
    console.log(totalItems);
    googleAPI(book, startIndex).get()
      .then(response => {
        setBooks(response.data.items);
        setTotalItems(response.data.totalItems);
      });
  };

  const pages = [];
  for (let i = 1; i <= Math.ceil(totalItems / 20); i++) {
    pages.push(i);
  }

  const renderPageNumbers = pages.map(number =>
    <li
      key={number}
      id={number}
      onClick={handlePageNumberClick}
      className={currentPage == number ? 'active' : null}
    >
      {number}
    </li>
  );

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
      {console.log(books)}
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
                bookId={book.id}
                title={book.volumeInfo.title}
                thumbnail={thumbnail}
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
          handleModal={handleModal}
          pickedBook={pickedBook}
          isFavoriteBook={isFavoriteBook}
          setIsFavoriteBook={setIsFavoriteBook}
        />
      }

      <ul className="pageNumbers">
        {renderPageNumbers}
      </ul>
    </div>
  )
};