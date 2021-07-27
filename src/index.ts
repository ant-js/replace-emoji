const EmojiRegex =
  /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;

export type StringOrStrings = string | string[];

/**
 *
 * @param s The string or strings to be replaced
 * @param r The content to be replaced
 * @param reg Customize RegExp
 * @returns The replaced result
 */
const replaceEmoji = (
  s: StringOrStrings,
  r: string = '',
  reg: RegExp = EmojiRegex,
) => {
  if (typeof s === 'string') {
    return s.replace(reg, r);
  }

  if (typeof s === 'object') {
    const a: string[] = [];
    s.forEach((i) => {
      if (typeof i === 'string') {
        a.push(i.replace(reg, r));
      } else {
        a.push(i);
      }
    });
    return a;
  }

  return '';
};

export { replaceEmoji };

export default replaceEmoji;
