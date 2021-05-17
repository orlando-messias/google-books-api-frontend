// react
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
// react icons
import { AiFillCloseCircle } from 'react-icons/ai';
import { BsBookmarksFill } from 'react-icons/bs';
import { BsBookmarks } from 'react-icons/bs';
// services
import userApi from '../services/userAPI';
// styles
import './ModalBookDetailsStyles.css';


// Modal Book Details Component
export default function ModalBookDetails({
  handleModal,
  pickedBook,
  isFavoriteBook,
  setIsFavoriteBook }) {

  const user = useSelector(state => state.loginReducer.user);
  const { id: userId } = user;

  const {
    bookId,
    title,
    description,
    image,
    language,
    publishedDate,
    pageCount } = pickedBook;

  useEffect(() => {
    userApi.get(`/favorites/books/user/${userId}`)
      .then(response => {
        const isFavorite = response.data.some(book => book.bookId === bookId);
        setIsFavoriteBook(isFavorite);
      });
  });


  const handleFavoriteClick = () => {
    // treats images not found
    let thumbnail = '';
    if (image.length <= 255) {
      thumbnail = image
    }

    userApi.post('/favorites/books/user', {
      userId,
      bookId,
      title,
      description,
      thumbnail,
      language,
      publishedDate,
      pageCount
    })
      .then(() => setIsFavoriteBook(!isFavoriteBook));
  };

  return (
    <div className="modal">
      <div className="modalContainer">

        <div className="modalHeader">
          <h3>Book Details</h3>
          <AiFillCloseCircle className="closeIcon" onClick={handleModal} />
        </div>

        <div className="modalBody">

          <div className="modalInfo">
            <div className="modalSideInfo">
              <img src={pickedBook.image} className="bookImage" alt={pickedBook.title} />
              <div>
                <h3>{pickedBook.title}</h3>
                <p>Published at: {pickedBook.publishedDate}</p>
                <p>Number of Pages: {pickedBook.pageCount}</p>
                <p>Language: {pickedBook.language}</p>
              </div>
            </div>
            <div className="favoriteContainer" onClick={handleFavoriteClick}>
              {isFavoriteBook
                ? <BsBookmarksFill className="favorite" />
                : <BsBookmarks className="notFavorite" />
              }
            </div>
          </div>

          <div className="modalDescription">
            <p>{pickedBook.description}</p>
          </div>

        </div>
      </div>

    </div>
  )
};