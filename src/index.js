import { readFileSync } from 'fs';
import _ from 'lodash';
import { resolve } from 'path';
import { cwd } from 'process';

const genDiff = (data1, data2) => {
  const keys1 = Object.keys(data1);
  const keys2 = Object.keys(data2);
  const keys = _.union(keys1, keys2).sort();

  const getStr = keys.map((key) => {
    if (_.has(data1, key) && _.has(data2, key)) {
      if (data1[key] === data2[key]) {
        return `  ${key}: ${data1[key]}`;
      }
      return [`- ${key}: ${data1[key]}`, `+ ${key}: ${data2[key]}`];
    } if (_.has(data1, key) && !(_.has(data2, key))) {
      return `- ${key}: ${data1[key]}`;
    } return `+ ${key}: ${data2[key]}`;
  });

  const tmp = getStr.flat();
  console.log(`{\n  ${tmp.join('\n  ')}\n}`);
  return `{\n  ${tmp.join('\n  ')}\n}`;
};

export default (filepath1, filepath2) => {
  const data1 = readFileSync(resolve(cwd(), filepath1), 'utf-8');
  const data2 = readFileSync(resolve(cwd(), filepath2), 'utf-8');

  const firstObj = JSON.parse(data1);
  const secondObj = JSON.parse(data2);
  genDiff(firstObj, secondObj);
};
