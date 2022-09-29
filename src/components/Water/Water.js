import React from "react";
import Card from 'react-bootstrap/Card';

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
        <Card bg='light' border="secondary" style={{ width: '200px', padding: '25px', margin: "25px"}}>
      
          <h1>{ this.state.glasses } glasses</h1>
          <AddWater sign="+" glasses={this.state.glasses} updateCount={this.handleCount.bind(this)} />
          {
            this.state.glasses > 0 &&
            <AddWater sign="-" glasses={this.state.glasses} updateCount={this.handleCount.bind(this)} />
          }
        </Card>
      )
    }
}