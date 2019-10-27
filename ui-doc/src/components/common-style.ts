import styled, { css } from "styled-components";

export const MainContentWrapper = styled.div`
  /* width: 70%; */
  /* max-width: 1200px; */
  /* margin: 0 auto; */
  /* justify-content: space-around; */
  position: relative;
  padding: 0.1px;

  ${(prop) => prop.border && css`
    border: 1px solid #f9f9f9;
  `}
`;

export const screenSize = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px'
};

export const device = {
  mobileS: `(min-width: ${screenSize.mobileS})`,
  mobileM: `(min-width: ${screenSize.mobileM})`,
  mobileL: `(min-width: ${screenSize.mobileL})`,
  tablet: `(min-width: ${screenSize.tablet})`,
  laptop: `(min-width: ${screenSize.laptop})`,
  laptopL: `(min-width: ${screenSize.laptopL})`,
  desktop: `(min-width: ${screenSize.desktop})`,
  desktopL: `(min-width: ${screenSize.desktop})`
};
