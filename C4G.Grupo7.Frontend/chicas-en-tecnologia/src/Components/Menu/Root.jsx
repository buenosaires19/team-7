import React from 'react';
import { withRouter } from 'react-router';
import Menu from './Menu'


class Root extends React.Component {
  render() {
    return (
      <div>
        <Menu />
        {this.props.children}
      </div>
    );
  }
}

export default withRouter(Root);