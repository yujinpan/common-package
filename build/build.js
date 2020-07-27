const rollup = require('rollup');
const terser = require('terser');
const fs = require('fs');

const config = require('./config');
const utils = require('./utils');
const defaultRollupConfig = require('./rollup.config.js');

// 清空目录
fs.rmdirSync(config.typesDir, { recursive: true });
fs.mkdirSync(config.typesDir);
fs.rmdirSync(config.outputDir, { recursive: true });
fs.mkdirSync(config.outputDir);

// run build
build(config.inputFiles.map(utils.createRollupFileOption)).then(() => {
  // eslint-disable-next-line no-console
  console.log('build completed!');
  // eslint-disable-next-line no-console
}, console.error);

// build: rollup -> terser
function build(options) {
  return Promise.all(
    options.map((option) => {
      // eslint-disable-next-line prefer-const
      let { input, output } = option;
      if (!Array.isArray(output)) {
        output = [output];
      }
      return rollup
        .rollup({ ...defaultRollupConfig, input })
        .then((bundle) => {
          return Promise.all(output.map(bundle.generate));
        })
        .then((res) => {
          return Promise.all(
            res.map((item, index) => {
              const { file, format } = output[index];
              const code = item.output[0].code;
              return write(
                file,
                config.banner +
                  (format === 'cjs'
                    ? terser.minify(code, {
                        toplevel: true
                      }).code
                    : code)
              );
            })
          );
        });
    })
  );
}

// write code to file
function write(dest, code) {
  return new Promise((resolve, reject) => {
    fs.mkdirSync(dest.replace(/\/[^/]+$/, ''), { recursive: true });
    fs.writeFile(dest, code, (err) => {
      if (err) return reject(err);
      // eslint-disable-next-line no-console
      console.log(blue(dest) + ' ' + getSize(code));
      resolve();
    });
  });
}

function getSize(code) {
  return (code.length / 1024).toFixed(2) + 'kb';
}

function blue(str) {
  return '\x1b[1m\x1b[34m' + str + '\x1b[39m\x1b[22m';
}
