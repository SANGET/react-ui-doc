import dark from './prism/dracula';
import light from './prism/shadesOfPurple';

const modeThemes = { light, dark };

export default function getPrismTheme({ mode }) {
  return {
    ...modeThemes[mode],
  };
}
