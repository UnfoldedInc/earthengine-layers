// From https://github.com/visgl/deck.gl/blob/c66e3e5bca63b6e214c27259025947dcfa7e359a/modules/core/src/utils/deep-equal.js
// Partial deep equal (only recursive on arrays)
export function deepEqual(a, b) {
  if (a === b) {
    return true;
  }
  if (!a || !b) {
    return false;
  }
  for (const key in a) {
    const aValue = a[key];
    const bValue = b[key];
    const equals =
      aValue === bValue ||
      (Array.isArray(aValue) && Array.isArray(bValue) && deepEqual(aValue, bValue));
    if (!equals) {
      return false;
    }
  }
  return true;
}

// Promisify eeObject.getMap
export function getMapAsync(eeObject, visParams) {
  return new Promise((resolve, reject) =>
    eeObject.getMap(visParams, (value, error) => {
      if (error) {
        reject(error);
        return;
      }
      resolve(value);
    })
  );
}
