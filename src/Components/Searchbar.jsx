// react
import React, { useEffect, useState } from 'react';
// react icons
import { FaSearch } from "react-icons/fa";


// Searchbar Component
export default function SearchBar({ handleSearchChange, handleSearchButtonClick }) {

  return (
    <div className="searchBarContainer">

      <div className="searchIconContainer">
        <FaSearch className="searchIcon" />
      </div>

      <input
        type="text"
        name="search"
        placeholder="Type a book name you want to search"
        onChange={handleSearchChange}
      />

      <button
        className="btnSearch"
        onClick={handleSearchButtonClick}
      >
        Search
      </button>

    </div >
  );
};