var shuffle = require('lodash').shuffle;

var randomize = function(list) {
  return shuffle(list);
}

module.exports = randomize;
