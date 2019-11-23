import styled, { css } from 'styled-components';

const docMenuWidth = `200px`;

export const Article = styled.article`
  padding-left: ${docMenuWidth};

  > p {
    margin-top: 30px;
    font-size: 17px;
    line-height: 1.7rem;
    max-width: 42em;

    &:first-of-type {
      margin-top: 15px;
    }
  }

  /* Intro */
  > h1 + p {
    font-size: 18px;
    font-weight: 300;
    color: ${({ theme }) => theme.color.subtitle};

    a,
    strong {
      font-weight: 400;
    }
  }

  > hr {
    height: 1px;
    margin-bottom: -1px;
    border: 0;
    border-bottom: 1px;
    border-color: ${({ theme }) => theme.color.subtitle};
    margin-top: 40px;

    &:first-child {
      margin-top: 0;
    }
  }

  > h1 {
    font-size: 40px;
    line-height: 1.1rem;
    font-weight: 600;
    margin-top: 40px;
    margin-bottom: 30px;
  }

  > h2 {
    border-top: 1px;
    border-color: border;
    margin-top: 44px;
    padding-top: 40px;
    line-height: 1.2rem;
    font-size: 20px;
  }

  > h1 + h2 {
    border-top: 0;
    margin-top: 0;
    padding-top: 0;
  }

  > h3 {
    padding-top: 45px;
  }

  > h3 {
    padding-top: 45px;
  }

  > h4 {
    margin-top: 50px;
    font-weight: 400;
    font-size: 20px;
    line-height: 1.3rem;
    color: ${({ theme }) => theme.color.subtitle};
  }

  > h2 + h3,
  > h2 + h3:first-of-type {
    padding-top: 30px;
  }

  > h4 + p {
    margin-top: 20px;
  }

  .editor {
    background-color: ${({ theme }) => theme.color['secondary-bg']};
    color: ${({ theme }) => theme.color['editor-text']};
    padding: 15px 20px;
    margin: 25px -20px;
    overflow: auto;
    font-size: 14px;
    line-height: 1.45rem;
    border-radius: 3px;
  }

  > code {
    background-color: ${({ theme }) => theme.color['editor-bg']};
    border-radius: 3px;
    color: inherit;
    font-family: SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono,
      Courier New, monospace;
    font-size: 85%;
    padding: 3px 6px;
  }

  > table {
    border-collapse: collapse;
    border-spacing: 0;
    display: block;
    margin-bottom: 16;
    margin-top: 20;
    overflow: auto;
    width: 100%;

    thead {
      border: 0;
      font: inherit;
      font-size: 100%;
      margin: 0;
      padding: 0;
      vertical-align: baseline;
    }

    tr {
      background-color: transparent;
      border-top: 1px;
      border-color: border;
    }

    th {
      background-color: inherit;
      font-weight: 600;
    }

    td,
    th {
      border: 1px;
      border-color: border;
      padding: 6px 13px;
    }
  }

  img {
    max-width: 100%;
  }

  ol,
  ul {
    margin-top: 20px;
    font-size: 16px;
    padding-left: 20px;

    p,
    p:first-of-type {
      font-size: 16px;
      margin-top: 0;
      line-height: 1.2rem;
    }

    li {
      margin-top: 10px;
    }

    ol,
    ul {
      margin-left: 20px;
      margin-top: 10px;
    }
  }

  ol {
    list-style: decimal;
  }

  ul {
    list-style: disc;
  }

  blockquote {
    font-size: 16px;
    background-color: ${({ theme }) => theme.color['blockquote-bg']};
    border-left: 8px solid;
    border-color: ${({ theme }) => theme.color.blockquote};
    padding: 10px 45px 10px 26px;
    margin: 20px -20px 30px;

    p {
      margin-top: 15px;

      /* &:first-of-type {
        margin-top: 0;
      } */
    }
  }
`;
