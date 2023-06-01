# rollup-plugin-eco
Rollup plugin for eco template

# Usage

```js
import eco from 'rollup-plugin-eco';

export default {
  input: 'src/main.js',
  output: {
    file: 'bundle.js',
    format: 'cjs'
  },
  plugins: [eco()]
}
```
