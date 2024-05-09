
import React from 'react';
import { Route } from 'react-router-dom';
import Home from './pages/Home';
import Directors from './pages/Directors';
import Actors from './pages/Actors';
import Movie from './pages/Movie';

const routes = (
  <div>
    <Route exact path="/" component={Home} />
    <Route path="/directors" component={Directors} />
    <Route path="/actors" component={Actors} />
    <Route path="/movie/:id" component={Movie} />
  </div>
);

export default routes;
