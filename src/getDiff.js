import _ from 'lodash';

const getDiffTree = (data1, data2) => {
  const keys = _.union(_.keys(data1), _.keys(data2));
  const sortedKeys = _.sortBy(keys);

  const getTree = sortedKeys.map((key) => {
    if (_.has(data1, key) && _.has(data2, key)) {
      if (_.isObject(data1[key]) && _.isObject(data2[key])) {
        return `${key}: ${getDiffTree(data1[key], data2[key])}`;
      }
      if (data1[key] === data2[key]) {
        return `  ${key}: ${data1[key]}`;
      }
      return [`- ${key}: ${data1[key]}`, `+ ${key}: ${data2[key]}`];
    } if (_.has(data1, key) && !(_.has(data2, key))) {
      return `- ${key}: ${data1[key]}`;
    } return `+ ${key}: ${data2[key]}`;
  });
  const tmp = getTree.flat();
  return `{\n  ${tmp.join('\n  ')}\n}`;
};

export default getDiffTree;
