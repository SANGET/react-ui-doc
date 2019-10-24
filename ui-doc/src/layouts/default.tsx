import React from 'react';

export default class DefaultLayout extends React.Component {
  render() {
    const { children, data = {} } = this.props;
    return (
      <div>{children}</div>
    );
  }
}
