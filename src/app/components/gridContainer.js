import React, { Component } from 'react';
import StaticLayout from './staticLayout.js';
import RecommendationLayout from './RecommendationLayout.js';

class GridContainer extends Component {
  constructor(props) {
    // Pass props to parent class
    super(props);
    // Set initial state

    this.state = {
      display: "0"
    }
  }

  render() {
    const Question = (
      <div>
        <StaticLayout />
      </div>
    )
    const Recommendations = (
      <RecommendationLayout />
    )

    if (this.state.display == 1) {
      return (
        Recommendations
      );
    }
    else return (Question);
  }
}

export default GridContainer;