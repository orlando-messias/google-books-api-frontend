// react
import React from 'react';
// react icons
import { AiFillCloseCircle } from 'react-icons/ai';
// styles
import './ModalBookDetailsStyles.css';


// Modal Book Details Component
export default function ModalBookDetails({ showModal, handleModal, pickedBook }) {

  return (
    <div className="modal">
      <div className="modalContainer">

        <div className="modalHeader">
          <h3>Book Details</h3>
          <AiFillCloseCircle className="closeIcon" onClick={handleModal} />
        </div>

        <div className="modalBody">

          <div className="modalInfo">
            <img src={pickedBook.image} className="bookImage" alt={pickedBook.title} />
            <div className="modalSideInfo">
              <h3>{pickedBook.title}</h3>
              <p>Published at: {pickedBook.publishedDate}</p>
              <p>Number of Pages: {pickedBook.pageCount}</p>
              <p>Language: {pickedBook.language}</p>
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