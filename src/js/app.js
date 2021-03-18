export default function orderByProps(obj, arr) {
  const sortedByProps = [];
  const sortedAlphabetically = [];
  for (const key in obj) {
    if (arr.includes(key)) {
      sortedByProps.push({
        key,
        value: obj[key],
      });
    } else {
      sortedAlphabetically.push({
        key,
        value: obj[key],
      });
    }
  }

  sortedByProps.sort((a, b) => arr.indexOf(a.key) - arr.indexOf(b.key));
  sortedAlphabetically.sort((a, b) => (a.key > b.key ? 1 : -1));

  return [...sortedByProps, ...sortedAlphabetically];
}
