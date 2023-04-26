/* eslint-disable no-param-reassign */
export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }

  const updatedMap = new Map();

  for (const [key, value] of map) {
    updatedMap.set(key, value === 1 ? 100 : value);
  }

  return updatedMap;
}
