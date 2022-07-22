// Promisify eeObject methods
export function promisifyEEMethod(eeObject, method, ...args) {
  return new Promise((resolve, reject) =>
    eeObject[method](...args, (value, error) => {
      if (error) {
        reject(error);
        return;
      }
      resolve(value);
    })
  );
}
