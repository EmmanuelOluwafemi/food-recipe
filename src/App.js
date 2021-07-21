import "../node_modules/slick-carousel/slick/slick.css";
import "../node_modules/slick-carousel/slick/slick-theme.css";
import './App.css'

import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";



import Home from './pages/Home';
import SingleMeal from './pages/SingleMeal';
import MealResults from './pages/MealResults';
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/meal/:id" component={SingleMeal} />
        <Route exact path="/" component={Home} />
        <Route exact path="/search" component={MealResults} />
      </Switch>
    </Router>
  );
}

export default App;
