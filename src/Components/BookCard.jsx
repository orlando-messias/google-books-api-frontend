// react
import React from 'react';
// styles
import './BookCardStyles.css';


export default function BookCard({ title, image, pageCount, publishedDate }) {

  return (
    <div className="bookCardPageContainer">
      <div className="bookCard">
        <div className="imageCard">
          <img src={image} alt={title} />
        </div>
        <div className="body">
          <h4>{title}</h4>
          <p>Num of Pages: {pageCount}</p>
          <p>Published at: {publishedDate}</p>
        </div>
      </div>

    </div>
  )
};