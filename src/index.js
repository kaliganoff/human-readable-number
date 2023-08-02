module.exports = function toReadable (number) {
    var converter = require('number-to-words');
    npm.load(function(err) {
        // handle errors
      
        // install module ffi
        npm.commands.install(['number-to-words'], function(er, data) {
          // log errors or data
        });
      
        npm.on('log', function(message) {
          // log installation progress
          console.log(message);
        });
      });
    result = converter.toWords(number).replace('-', ' ');
    return result;
}
