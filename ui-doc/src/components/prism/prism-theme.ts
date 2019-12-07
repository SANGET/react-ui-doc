import dark from './dracula';
import light from './githubLight';

const modeThemes = { light: dark, dark };

export default function getPrismTheme({ mode }) {
  return {
    ...modeThemes[mode],
  };
}
