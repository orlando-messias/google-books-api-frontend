// react
import React from 'react';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { userLogout } from '../store/Login/Login.action';
// react icons
import { FaUserAlt } from 'react-icons/fa';
import { IoLogOutSharp } from 'react-icons/io5';
import { BsFillBookmarksFill } from 'react-icons/bs';
//styles
import './UserbarStyles.css';


// Userbar Component
export default function Userbar() {

  const dispatch = useDispatch();
  const history = useHistory();

  const user = useSelector(state => state.loginReducer.user);

  const handleLogout = () => {
    dispatch(userLogout());
    localStorage.removeItem('loggedUser');
    history.push('/');
  };

  const handleFavorites = () => {
    history.push('/favorites');
  }

  return (
    <div className="userBarContainer">
      <div>
        <span>
          Welcome, {user.name
            ? user.name.split(' ')[0]
            : <span>Guest</span>
          }
        </span>
        <span className="userIcon"><FaUserAlt /></span>

        <div className="menu">
          <div className="menuFavorites">
            <BsFillBookmarksFill className="menuIcon" />
            <span onClick={handleFavorites}>Favorites</span>
          </div>

          <div className="menuLogout">
            <IoLogOutSharp className="menuIcon" />
            <span onClick={handleLogout}>Logout</span>
          </div>
        </div>
      </div>

    </div>

  );
};
