export default function orderByProps(obj, array) {
  const otherKeys = Object.keys(obj).filter(k => !array.includes(k)).sort();
  return [...array, ...otherKeys].filter(k => k in obj).map(k => ({ [k]: obj[k] }));
}
