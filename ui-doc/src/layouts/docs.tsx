import React from 'react';
import DefaultLayout from './default';

export default class DocLayout extends React.Component {
  render() {
    const { children } = this.props;
    console.log(this.props);
    return (
      <DefaultLayout>
        <div>{children}</div>
      </DefaultLayout>
    );
  }
}
