import React, { Component } from 'react';

class Test extends Component {

  componentDidMount() {
    console.log(this.props);
  }

  render() {
    return (
      <React.Fragment>
        <h1>{this.props.location.pathname+this.props.location.search}</h1>
      </React.Fragment>
    );
  }
}

export default Test;
