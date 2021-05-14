// react
import React from 'react';
// react-icons
import { GiOpenBook } from 'react-icons/gi';
// components
import Topbar from '../Components/Topbar';
// styles
import './HomeStyles.css';


// Home Component
export default function Home() {

  return (
    <div className="pageContainer">

      <Topbar />

      <div className="logoContainer">
        <h2 className="logoTitleMain">Google</h2>
        <span className="logoTitleSecondary">
          Books
          <GiOpenBook className="logoBook" />
        </span>
      </div>
    </div>
  )
};