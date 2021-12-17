var slugify = require('slugify');

const slugifyString = (string) => {
  slugify(string);
};

const capitalizeWords = (string) => {
  var words = string.split(' ');

  for(var i= 0; i < words.length; i++) {
    var newElement = words[i].charAt(0).toUpperCase() + string.slice(1);
    words[i] = newElement;
  }

  var newString = words.join(' ');
  return newString;
}


module.exports = {
  slugifyString,
  capitalizeWords,
}
