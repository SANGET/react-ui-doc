import styled, { css } from "styled-components";

export const MainContentWrapper = styled.div`
  width: 70%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;

  ${prop => prop.border && css`
    border: 1px solid #f9f9f9;
  `}
`;
