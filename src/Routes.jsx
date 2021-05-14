import React from 'react';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';
import Home from './Pages/Home';

export default function Routes() {
  return (
    <Router>
      <Route path='/home' component={Home} />
    </Router>
  );
};