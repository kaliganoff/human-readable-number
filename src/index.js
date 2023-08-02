module.exports = function toReadable (number) {
    var converter = require('number-to-words');
    result = converter.toWords(number).replace('-', ' ');
    return result;
}
