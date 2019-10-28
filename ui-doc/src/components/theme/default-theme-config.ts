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
      primary: '#bd4932',
      border: '#ececec',
      text: '#222',
      'editor-text': '#403f53',
      'editor-bg': '#f4f4f4',
      blockquote: '#ffe564',
      'blockquote-bg': (p) => transparentize(0.7, '#CCC'),
      subtitle: '#6d6d6d',
      'home-hero-img-bg': 'transparent',
      'nav-link': '#AAA',
      'nav-link-hover': (p) => transparentize(0.3, '#CCC'),
      'menu-button-shadow': (p) => transparentize(0.7, '#CCC'),
    },
    dark: {
      body: '#000',
      primary: '#ff6042',
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
