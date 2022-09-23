import React from "react";

import { AddWater } from "./AddWater";

export default class Water extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      glasses: 0
    }
  }

  handleCount(value) {
    this.setState((prevState) => ({ glasses: prevState.glasses + value }));
  }


    render() {
      return (
      <div>
        <h1>{ this.state.glasses } glasses</h1>
        <AddWater sign="+" glasses={this.state.glasses} updateCount={this.handleCount.bind(this)} />
        {
          this.state.glasses > 0 &&
          <AddWater sign="-" glasses={this.state.glasses} updateCount={this.handleCount.bind(this)} />
        }
      </div>
      )
    }
}