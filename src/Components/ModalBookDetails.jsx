// react
import React, { useEffect, useState } from 'react';
// react icons
import { AiFillCloseCircle } from 'react-icons/ai';
import { BsBookmarksFill } from 'react-icons/bs';
import { BsBookmarks } from 'react-icons/bs';
import userApi from '../services/userAPI';
// styles
import './ModalBookDetailsStyles.css';


// Modal Book Details Component
export default function ModalBookDetails({ handleModal, pickedBook }) {
  const [isFavoriteBook, setIsFavoriteBook] = useState(false);

  const userId = 2;
  const {
    bookId,
    title,
    description,
    thumbnail,
    language,
    publishedDate,
    pageCount } = pickedBook;

  useEffect(() => {
    userApi.get('/favorites/books/user/2')
      .then(response => {
        const isFavorite = response.data.some(book => book.bookId === bookId);
        setIsFavoriteBook(isFavorite);
      });
  });


  const handleFavoriteClick = () => {

    userApi.post('/favorites/books/user',
      { userId, bookId, title, description, thumbnail, language, publishedDate, pageCount })
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
              <img src={pickedBook.thumbnail} className="bookImage" alt={pickedBook.title} />
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