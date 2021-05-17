// react
import React from 'react';
// react-icons
import { ImSearch } from 'react-icons/im';
import { BsFillBookmarksFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { AiFillHome } from 'react-icons/ai';
// components
import Userbar from './Userbar';
// styles
import './TopbarStyles.css';
import { useHistory } from 'react-router';


// Topbar Component
export default function Topbar() {

  const history = useHistory();

  const handleHomeClick = () => {
    history.push('/home');
  };

  return (
    <div className="topbarContainer">
      <div className="topbarMenu">
        <div>
          <AiFillHome className="icon" />
          <span onClick={handleHomeClick}>Home</span>
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
      <Userbar />
    </div>
  );
};