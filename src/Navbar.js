import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Navbar.css';

class NavBar extends Component {
  static defaultProps = {
    onNewRecipe() {}
  };

  static propTypes = {
    onNewRecipe: PropTypes.func
  };

  render() {
    return (
      <div>
        <header>
          <h2><a>Recipe App</a></h2>
          <nav>
            <li><a onClick={this.props.onNewRecipe}>New Recipe</a></li>
            <li><a>Home</a></li>
            <li><a>About</a></li>
            <li><a>Contact Us</a></li>
          </nav>
        </header>
      </div>
    );
  }
}

NavBar.defaultProps = {
  navbar: {
    title: 'Recipe App',
    menus: ['New Recipe', 'Home', 'About', 'Contact Us']
  }
};

export default NavBar;