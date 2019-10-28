import React from 'react';
import styled, { css } from 'styled-components';
import Icon from 'ukelli-ui/core/icon/icon';
import { AlgoliaStyle } from './algolia-style';

const Container = styled.div`
  position: relative;

  svg {
    color: border;
    transition: base;
    transition-property: color;
  }

  &:focus-within {
    svg {
      color: text;
    }
  }
`;

const Input = styled.input`
  background-color: secondary-bg;
  border-radius: 4;
  border: 1;
  border-color: border;
  line-height: 1.4;
  padding: 5 10 5 30;
  color: text;
  transition: base;
  transition-property: all;

  &:focus {
    outline: none;
  }
`;

export function DocSearch({ apiKey, indexName }) {
  const ref = React.useRef();
  const [width, setWidth] = React.useState();
  React.useEffect(() => {
    const rect = ref.current.getBoundingClientRect();
    setWidth(window.innerWidth - rect.x - 20);
  }, []);

  React.useEffect(() => {
    window.docsearch({
      apiKey,
      indexName,
      inputSelector: '#algolia-docsearch-input',
    });
  }, [apiKey, indexName]);

  return (
    <Container ref={ref}>
      <AlgoliaStyle />
      <Icon n="searchengin" />
      <Input
        type="search"
        id="algolia-docsearch-input"
        placeholder="Search..."
        data-width={width}
      />
    </Container>
  );
}
