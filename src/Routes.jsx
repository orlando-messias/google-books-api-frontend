import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import FavoriteBooks from './Pages/FavoriteBooks';
import Home from './Pages/Home';

export default function Routes() {
  return (
    <Router>
      <Route path='/home' component={Home} />
      <Route path='/favorites' component={FavoriteBooks} />
    </Router>
  );
};