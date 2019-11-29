import React from 'react';
import { Grid, Icon } from '@deer-ui/core';
import styled from 'styled-components';
import DefaultLayout from '../layouts/default';

const Not = styled.div`
  font-size: 200px;
  color: #AAA;
`;

const NotFound = (props) => {
  console.log(props);
  return (
    <DefaultLayout {...props}>
      <Grid
        className="404 mt20"
        container
        alignItems="center"
        justifyContent="center"
        alignContent="center"
        direction="col">
        <Icon n="cat" style={{
          fontSize: 100,
          color: '#EEE'
        }} />
        <Not>
          404
        </Not>
      </Grid>
    </DefaultLayout>
  );
};

export default NotFound;
