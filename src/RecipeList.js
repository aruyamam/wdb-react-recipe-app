import React, { Component } from 'react';
import Recipe from './Recipe';
import PropTypes from 'prop-types';
import './RecipeList.css';

class RecipeList extends Component {
  static defaultProps = {
    recipes: [
      {
        'title': 'Spaghhetti',
        'ingredients': ['pasta', '8 cups water','1 box spaghetti'],
        'instruction': 'Open jar of Spaghetti sauce. Bring to simmer. Boil water. Cook pasta until done. Combine pasta and sauce.',
        img: 'spaghetti.jpg'
      },
      {
        'title': 'Milkshake',
        'ingredients': ['2 Scoops ice cream', '8 ounces milk'],
        'instruction': 'Combine ice cream and milk. Blend until creamy.',
        img: 'milkshake.jpg'
      },
      {
        'title': 'Avocado Toast',
        'ingredients': ['2slices of bread', '1 avocado','1tablespoon olive oil', '1 pinch of salt', 'papper'],
        'instruction': 'Toast bread. Slice avocado and spread on bread. Add salt, oil, and papper to toast.',
        img: 'avocado_toast.jpg'
      }
    ]
  };

  static propTypes = {
    recipes: PropTypes.arrayOf(PropTypes.object).isRequired
  };

  render() {
    const recipes = this.props.recipes.map((r, index) => (
      <Recipe key={index} {...r} />
    ));

    return (
      <div className="recipe-list">
        {recipes}
      </div>
    );
  }
}

export default RecipeList;
