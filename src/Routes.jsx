import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import FavoriteBooks from './Pages/FavoriteBooks';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';

export default function Routes() {
  return (
    <Router>
      <Route path='/' exact component={Login} />
      <Route path='/home' component={Home} />
      <Route path='/favorites' component={FavoriteBooks} />
      <Route path='/register' component={Register} />
    </Router>
  );
};