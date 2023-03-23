import getDiffTree from './getDiff.js';
import getParse from './parser.js';
import getStylishFormat from './format/stylish.js';

export default (filepath1, filepath2) => {
  const firstObject = getParse(filepath1);
  const secondObject = getParse(filepath2);
  const tmp = getDiffTree(firstObject, secondObject);
  return getStylishFormat(tmp);
};
