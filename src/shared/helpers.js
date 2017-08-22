export function clone2DArray(arrY) {
  return arrY.map((arrX) => {
    return arrX.slice();
  });
}
