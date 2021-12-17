
const orderByAsc = (array) => {
  array.sort();
};

const randomElem = (array) => {
  var randomPos = Math.floor(Math.random() * ((array.length - 1) - 0 + 1) + 0);
  return array[randomPos];
};

module.exports = {
  orderByAsc,
  orderByAsc,
}