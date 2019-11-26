const path = require('path');
const copyFile = require('../../scripts/copy-files');

copyFile({
  outdir: path.resolve('../ui-doc/dist'),
  targetFiles: [path.resolve('./README.md')],
  targetPackageJson: path.resolve('./package.json'),
  // packageExtraOptions: {
  //   types: './components/index.d.ts'
  // }
});
