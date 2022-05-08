import React from "react";

export default class Water extends React.Component {

    render() {
      const { waterAmount } = this.props;
      return <h1>{ waterAmount } glasses</h1>;
    }
}