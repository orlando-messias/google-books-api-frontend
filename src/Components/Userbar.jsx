// react
import React from 'react';
// react icons
import { FaUserAlt } from 'react-icons/fa';
import { IoLogOutSharp } from 'react-icons/io5';
import { BsFillBookmarksFill } from 'react-icons/bs';
//styles
import './UserbarStyles.css';


// Userbar Component
export default function Userbar() {

  return (
    <div className="userBarContainer">
      <div>
        <span>Welcome, User</span>
        <span className="userIcon"><FaUserAlt /></span>
        <span className="editUser">edit</span>

        <div className="menu">
          <div className="menuFavorites">
            <BsFillBookmarksFill className="menuIcon"/>
            <span>Favorites</span>
          </div>

          <div className="menuLogout">
            <IoLogOutSharp className="menuIcon"/>
            <span>Logout</span>
          </div>
        </div>
      </div>

    </div>

  );
};
