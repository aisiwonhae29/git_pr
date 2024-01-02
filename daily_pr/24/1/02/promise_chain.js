function a() {
  return new Promise((resolve) => {
    resolve(3);
  });
}
function b(rs) {
  return new Promise((resolve) => {
    resolve(rs + 3);
  });
}
function c(rs) {
  return new Promise((resolve) => {
    resolve(rs + 5);
  });
}
console.log(
  a()
    .then((rs) => b(rs))
    .then((rs) => c(rs))
);
