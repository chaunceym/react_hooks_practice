import React, { Component } from "react";

export default class CountClass extends Component<{}, { count: number }> {
  constructor(props: string) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  componentDidUpdate() {
    setTimeout(() => {
      console.log(this.state.count);
    }, 3000);
  }

  render() {
    return (
      <div>
        Count: {this.state.count}
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          +1
        </button>
      </div>
    );
  }
}
