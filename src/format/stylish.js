const getCurrentIndent = (depth, intend = 4) => ' '.repeat(intend * depth - 2);
const getClosingIndent = (depth, intend = 4) => ' '.repeat(intend * depth - intend);

const stringfy = (value, depth = 1) => {
  const iter = (currentValue, depthIter) => {
    const iterIndent = getCurrentIndent(depthIter);
    if (typeof currentValue !== 'object' || currentValue === null) {
      return String(currentValue);
    }

    const massValue = Object.entries(currentValue);
    const lines = massValue.map(([key, val]) => `${iterIndent}${key}: ${iter(val, depth + 1)}`);
    const result = ['{', ...lines, `${getClosingIndent(depthIter)}}`].join('\n');
    return result;
  };
  return iter(value, depth);
};

export default stringfy;
