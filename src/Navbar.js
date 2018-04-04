import React, { Component } from 'react';
import './Navbar.css';

class NavBar extends Component {

  render() {
    return (
      <div>
        <header>
          <h2><a>Recipe App</a></h2>
          <nav>
            <li><a>New Recipe</a></li>
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