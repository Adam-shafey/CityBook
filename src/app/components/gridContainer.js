import React, { Component } from 'react';
import StaticLayout from './staticLayout.js';
import RecommendationLayout from './RecommendationLayout.js';

class GridContainer extends Component {
  constructor(props) {
    // Pass props to parent class
    super(props);
    // Set initial state

    this.state = {
      display: 0
    }

    this.switch1 = this.switch1.bind(this);
    this.switch2 = this.switch2.bind(this);

  }
  switch1(){
    this.setState({
      display: 1
    })
  }

  switch2(){
    this.setState({
      display: 0
    })
  }


  render() {
    const Question = (
      <div>
        <StaticLayout submitCallback={this.switch1}/>
      </div>
    )
    const Recommendations = (
      <RecommendationLayout returnCallback={this.switch2}/>
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