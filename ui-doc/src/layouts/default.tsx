import React from 'react';
import styled from 'styled-components';

import { Head } from '../components/head';
import { ProjectHeader } from '../components/header';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Headers = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
`;

export default class DefaultLayout extends React.Component {
  render() {
    const { children, pageContext } = this.props;
    return (
      <Container>
        <Head pageContext={pageContext} />
        <Headers>
          <ProjectHeader />
        </Headers>
        {children}
      </Container>
    );
  }
}
