import { transparentize } from 'polished';

const getIsDarkMode = () => window.matchMedia("(prefers-color-scheme: dark)").matches;

const defaultThemeConfig = {
  defaultMode: 'system',
  colorModes: ['light', 'dark'],
  transitions: {
    base: '300ms ease',
  },
  // 用于实际情况的 color
  color: {},
  activeColorMode: '',
  colors: {
    light: {
      body: '#FFF',
      primary: '#376BFB',
      border: '#ececec',
      text: '#222',
      'editor-text': '#403f53',
      'editor-bg': '#f4f4f4',
      blockquote: '#b0c5ff',
      'blockquote-bg': '#f9f9f9',
      'secondary-bg': '#fefefe',
      subtitle: '#6d6d6d',
      'home-hero-img-bg': 'transparent',
      'nav-link': '#777',
      'nav-link-hover': '#444',
      'nav-link-hover-bg': '#fafafa',
      'menu-button-shadow': (p) => transparentize(0.7, '#CCC'),
    },
    dark: {
      body: '#000',
      primary: '#376BFB',
      bg: '#000',
      subtitle: '#eee',
      'secondary-bg': '#111',
      border: '#333',
      'home-hero-img-bg': '#fff',
      text: '#fff',
      'editor-text': '#ddd',
      'editor-bg': '#222',
    }
  }
};

export default defaultThemeConfig;
