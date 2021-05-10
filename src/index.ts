const emojiRegex = /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;

export type StringOrStrings = string | string[];

const replaceEmoji = (s: StringOrStrings, r: string = '') => {
  if (typeof s === 'string') {
    return s.replace(emojiRegex, r);
  }

  if (typeof s === 'object') {
    const a: string[] = [];
    s.forEach((i) => {
      a.push(i.replace(emojiRegex, r));
    });
    return a;
  }

  return '';
};

export { replaceEmoji };

export default replaceEmoji;
