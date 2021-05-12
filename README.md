# 🔍 replace-emoji

🔍 Replace emojis from string or string[]

[![](https://img.shields.io/npm/v/replace-emoji?style=flat-square)](https://www.npmjs.com/package/replace-emoji)

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

replaceEmoji('🤖123'); // => 123
replaceEmoji('🤖123', '6'); // => 6123
replaceEmoji(['🤖1', '🤖2']); // => ['1', '2']
```

```js
/**
 *
 * @param s The string or strings to be replaced
 * @param r The content to be replaced
 * @param reg Customize RegExp
 * @returns Replaced result
 */
```

## Changelog

[CHANGELOG](./CHANGELOG.md)

## LICENSE

[MIT](.LICENSE)
