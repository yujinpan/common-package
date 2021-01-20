module.exports = {
  banner:
    '/*!\n' +
    ` * package-base v${require('./package.json').version}\n` +
    ` * (c) 2019-${new Date().getFullYear()} yujinpan\n` +
    ' * Released under the MIT License.\n' +
    ' */\n',
  inputFiles: ['src/**/!(*.d).*(ts|js)'],
  typesOutputDir: 'dist',
  singleFile: false
};
