# 🔍 replace-emoji

🔍 Replace emojis from string or string[]

![](https://img.shields.io/npm/v/replace-emoji?style=flat-square)

## Usage

```bash
npm i replace-emoji
# or
yarn add replace-emoji
```

```js
import replaceEmoji from 'replace-emoji';
// or
const { replaceEmoji } = require('replaceEmoji');

replaceEmoji('🤖123');        // => 123
replaceEmoji('🤖123', '6');   // => 6123
replaceEmoji(['🤖1','🤖2']);  // => ['1', '2']
```

## Changelog

[CHANGELOG](./CHANGELOG.md)

## LICENSE

[MIT](.LICENSE)
