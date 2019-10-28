# 简介

JavaScript 与 TypeScript 代码的打包的基础环境。

- rollup 打包 es/cjs 模块
- eslint 校验代码
- babel 编译 es6+/ts 代码
- karma-webpack/jasmine 单元测试

## 目录

```
|- build 进行生产的配置文件
  |- alias.js 路径别名配置
  |- build.js 打包脚本
  |- config.js 打包配置
  |- rollup.config.js rollup 基本配置
|- dist 打包输出
  |- *.common.js commonjs 模块
  |- *.esm.js es 模块
|- src 源文件
|- stat 包体积分析（html直接打开）
|- test 测试
  |- unit 单元测试
    |- modules 所有的测试模块
    |- index.js 测试模块的入口文件
    |- karma.config.js karma 配置文件
|- types ts 类型声明文件
|- .editorconfig 编辑器配置文件
|- .eslintignore eslint 忽略目录配置文件
|- .eslintrc.js eslint 配置文件
|- babel.config.js babel 配置文件
```

## 开发

- 在 `src/` 下开发 JS/TS 模块，例如：`example.ts`
- 在 `test/unit` 下创建单元测试文件，例如：`example.spec.ts`（必须带 `spec.ts/js` 后缀）
- 引入 `example.ts` 中的内容编写单元测试
- 运行命令 `npm test` 进行测试，然后发现问题进行回归

> 如果需要 debug，请关闭 `test/unit/karma.config.js` 中的 singleRun 选项。

## 发布

- 在 `build/config.js` 中配置入口文件，例如上面的 `example.ts`

```js
const multiOption = [
  {
    // 入口
    input: "src/example.ts",

    // 创建输出配置
    // createOutputOptions 函数传入参数为输出的文件名
    output: createOutputOptions("example")
  }
];
```

- 运行命令 `npm run build` 进行打包
- 运行命令 `npm publish` 发布包（需要登陆 npm）

## 注意事项

- `./src` 目录在项目中（src/test）中都配置了简写路径，路径名为 `src`，
  配置其他的参考 `build/alias.js` 与 `tsconfig.json` 中的 `paths` 参数。
