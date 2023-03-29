import getStylishFormat from './stylish.js';
import getPlainFormat from './plain.js';

const getFormat = (tree, format) => {
  if (format === 'stylish') {
    return getStylishFormat(tree);
  }
  return getPlainFormat(tree);
};

export default getFormat;
