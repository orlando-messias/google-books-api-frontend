// react
import React from 'react';
// react icons
import { FaSearch } from "react-icons/fa";
// services
import validations from '../services/validations';
// styles
import './SearchbarStyles.css';


// Searchbar Component
export default function SearchBar({ handleSearchChange, handleSearchButtonClick, book }) {

  return (
    <div className="searchbarBox">

      <div className="searchIconBox">
        <FaSearch className="searchIcon" />
      </div>

      <input
        type="text"
        name="search"
        placeholder="Type a book name you want to search"
        onChange={handleSearchChange}
        autoComplete="off"
      />

      <button
        className="btnSearch"
        onClick={handleSearchButtonClick}
        disabled={!validations.searchInputValidation(book)}
      >
        Search
      </button>

    </div >
  );
};