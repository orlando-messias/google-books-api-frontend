// react
import React from 'react';
// styles
import './BookCardStyles.css';


// Book Card Component
export default function BookCard({
  title,
  thumbnail,
  pageCount,
  publishedDate,
  language,
  description,
  handlePickedBook,
  handleModal,
  bookId }) {

  const handleCardClick = () => {
    handlePickedBook({
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
    <div className="bookCardPageContainer" onClick={handleCardClick}>
      <div className="bookCard">
        <div className="imageCard">
          <img src={thumbnail} alt={title} />
        </div>
        <div className="body">
          <h4>{title}</h4>
          <p>Num of Pages: {pageCount}</p>
          <p>Published at: {publishedDate}</p>
        </div>
        <div className="footer">
          <p>{language} {description}</p>
        </div>
      </div>
    </div>
  )
};