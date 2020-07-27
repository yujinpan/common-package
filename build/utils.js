const config = require('./config');

/**
 * 创建配置项
 * @param {String} filePath 例如：src/index.ts
 */
function createRollupFileOption(filePath) {
  const filename = filePath.split('/').pop();
  const outputPath = filePath
    .replace(filename, '')
    .replace(config.inputDir, config.outputDir);
  const outputName = `${outputPath}${filename.replace(/\.[^.]+$/g, '')}`;
  return {
    input: filePath,
    output: [
      {
        file: `${outputName}.common.js`,
        format: 'cjs'
      },
      {
        file: `${outputName}.esm.js`,
        format: 'es'
      }
    ]
  };
}

module.exports = {
  createRollupFileOption
};
