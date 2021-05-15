// react
import React from 'react';
// react icons
import { AiFillCloseCircle } from 'react-icons/ai';
// styles
import './ModalBookDetailsStyles.css';


// Modal Book Details Component
export default function ModalBookDetails({ showModal, handleModal, book }) {

  return (
    <div className="modal">
      <div className="modalContainer">

        <div className="modalHeader">
          <h3>Book Details</h3>
          <AiFillCloseCircle className="closeIcon" />
        </div>

        <div className="modalBody">

          <div className="modalInfo">
            <span className="bookImage"></span>
            <div className="modalSideInfo">
              <h3>Book Title Here</h3>
              <p>Number of Pages: 44</p>
              <p>Published at: 2020</p>
              <p>Year</p>
            </div>
          </div>

          <div className="modalDescription">
            <p className="modalSubtitle">Subtitle</p>
            <p>Book description here this is long wait a minute, man</p>
          </div>

        </div>
      </div>

    </div>
  )
};