/*
* create by leo on 2019 10-07
* */
import React from 'react';

class View extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const {
      test = 'helloWorld',
    } = this.props;
    return (
      <div>
        {test}
      </div>
    );
  }
}

export default View;
