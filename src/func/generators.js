export const repeatedArray = function* (arr) {
  let index = 0;
  while (true) {
    yield arr[index++ % arr.length];
  }
};
