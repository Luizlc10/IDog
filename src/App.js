import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "IDog"
    };
  }

  render() {
    return <h1>{this.state.title}</h1>;
  }
}
