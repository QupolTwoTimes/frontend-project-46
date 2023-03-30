import getStylishFormat from './stylish.js';
import getPlainFormat from './plain.js';
import getJsonStyle from './json.js';

const getFormat = (tree, format) => {
  if (format === 'stylish') {
    return getStylishFormat(tree);
  } if (format === 'plain') {
    return getPlainFormat(tree);
  } return getJsonStyle(tree);
};

export default getFormat;
