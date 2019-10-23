import React from 'react';

export default class DocLayout extends React.Component {
  render() {
    const { children } = this.props;
    console.log(this.props);
    return (
      <div>{children}</div>
    );
  }
}
