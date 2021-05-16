// react
import React, { useEffect, useState } from 'react';
import ModalBookDetails from '../Components/ModalBookDetails';
// components
import Topbar from '../Components/Topbar';
// services
import userApi from '../services/userAPI';
// styles
import './FavoriteBooksStyles.css';


// Favorite Books Page
export default function FavoriteBooks() {
  const [favoriteBooks, setFavoriteBooks] = useState([]);
  const [isFavoriteBook, setIsFavoriteBook] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [pickedBook, setPickedBook] = useState({});
  const [isFetching, setIsFetching] = useState(false);

  // fetches user api to get all favorite books
  useEffect(() => {
    setIsFetching(true);
    userApi.get(`/favorites/books/user/2`)
      .then(response => {
        setFavoriteBooks(response.data)
        setIsFetching(false);
      });
  }, [isFavoriteBook]);

  const handleModal = () => {
    setShowModal(!showModal);
  };

  const handleFavoriteClick = (
    bookId,
    title,
    thumbnail,
    pageCount,
    publishedDate,
    language,
    description) => {

    setPickedBook({
      bookId,
      title,
      thumbnail,
      pageCount,
      publishedDate,
      language,
      description
    });

    handleModal();
  };


  return (
    <div className="container">

      <Topbar />

      <div className="pageContainer">
        <div className="favoritesContainer">

          <p className="pageTitle">Your Favorite Books</p>

          <div className="cardsContainer">

            {isFetching && <p>LOADING...</p>}

            {favoriteBooks.length === 0 && !isFetching && <p>You didn't picked any book yet!</p>}

            {favoriteBooks.map((fav, index) => (
              <div
                key={index}
                className="favoriteCard"
                onClick={() => handleFavoriteClick(
                  fav.bookId,
                  fav.title,
                  fav.thumbnail,
                  fav.pageCount,
                  fav.publishedDate,
                  fav.language,
                  fav.description
                )}
              >
                <p>{fav.title}</p>
                <img src={fav.thumbnail} alt={fav.title} />
              </div>
            ))}
          </div>

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
    </div>
  );
};