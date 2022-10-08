import React from "react";
import Card from 'react-bootstrap/Card';

import { AddWater } from "./AddWater";

export default class Water extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      glasses: 0
    }

    this.handleCount = this.handleCount.bind(this)
  }

  handleCount(value) {
    this.setState((prevState) => ({ glasses: prevState.glasses + value }));
  }


    render() {
      return (
        <Card bg='light' border="secondary" style={{ width: '200px', padding: '25px', margin: "25px"}}>
          <h1>Water</h1>
          <p>{ this.state.glasses }<br></br> glasses</p>
          <AddWater sign="+" glasses={this.state.glasses} updateCount={this.handleCount} />
          {
            this.state.glasses > 0 &&
            <AddWater sign="-" glasses={this.state.glasses} updateCount={this.handleCount} />
          }
        </Card>
      )
    }
}