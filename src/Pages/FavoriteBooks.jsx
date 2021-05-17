// react
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { loginSuccess } from '../store/Login/Login.action';
// components
import Topbar from '../Components/Topbar';
import ModalBookDetails from '../Components/ModalBookDetails';
// services
import userApi from '../services/userAPI';
import { isLogin } from '../services/loginServices';
// styles
import './FavoriteBooksStyles.css';


// Favorite Books Page
export default function FavoriteBooks() {
  const [favoriteBooks, setFavoriteBooks] = useState([]);
  const [isFavoriteBook, setIsFavoriteBook] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [pickedBook, setPickedBook] = useState({});
  const [isFetching, setIsFetching] = useState(false);

  const history = useHistory();
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem('loggedUser'));
  const userId = user ? user.id : null;
  
  // checks if user is logged in, if not, redirects to login page
  useEffect(() => {
    !isLogin()
      ? history.push('/')
      : dispatch(loginSuccess(JSON.parse(localStorage.getItem('loggedUser'))));
  }, [dispatch, history]);

  // fetches user api to get all favorite books
  useEffect(() => {
    setIsFetching(true);
    userApi.get(`/favorites/books/user/${userId}`)
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