const banner =
  '/*!\n' +
  ` * package-base v${require('../package.json').version}\n` +
  ` * (c) 2019-${new Date().getFullYear()} yujinpan\n` +
  ' * Released under the MIT License.\n' +
  ' */\n';

// multi package
const inputFiles = ['src/**/!(*.d|types).*(ts|js)'];

module.exports = {
  banner,
  inputFiles,
  inputDir: 'src',
  outputDir: 'dist',
  typesDir: 'types',
  extensions: ['.js', '.jsx', '.ts', '.tsx']
};
