import React, { Component } from 'react';
import NavBar from './Navbar';
import RecipeList from './RecipeList';
import './RecipeApp.css';

class RecipeApp extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <RecipeList />
      </div>
    );
  }
}

export default RecipeApp;
