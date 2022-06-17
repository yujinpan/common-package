# Package Base

Build JS/TS to a library.

```
- src
  - test.js         => test.js
  - test.ts         => test.js/test.d.ts
  - test.scss       => (inject to js)
  - test.png        => test.[hash].png
```

## Dev

- create a source file：`src/example.ts`
- create a test file：`src/example.spec.ts`
- `npm test` to test
- `npm run build` to build
- `npm publish` to publish

> If you won't to debug，please change the option `karma.config.js#singleRun` to false.
