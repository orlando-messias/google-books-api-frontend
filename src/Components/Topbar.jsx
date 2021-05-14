// react
import React from 'react';
import { ImSearch } from 'react-icons/im';
import { BsFillBookmarksFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { AiFillHome } from 'react-icons/ai';

// styles
import './TopbarStyles.css';


export default function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarMenu">
        <div>
          <AiFillHome className="icon" />
          <span>Home</span>
        </div>
        <div>
          <MdEmail className="icon" />
          <span>Contact Us</span>
        </div>
      </div>
      <div className="topbarTitle">
        <div>
          <h2>Search</h2> <ImSearch className="iconSpace" />
        </div>
        <div>
          <span>then</span>&nbsp;<h2>Favorite</h2> <BsFillBookmarksFill className="iconSpace" />
        </div>
        {/* <p>Google Books</p> */}
      </div>
      <div>
        <p>User's Area</p>
      </div>
    </div>
  );
};