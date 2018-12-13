/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('request');

// This function should retrieve the first line of the file at `filePath`
// var pluckFirstLineFromFile = function(filePath, function(err, text) => {
//   if (err) {
//     throw (err);
//   } else {
//     fs.readFile(filePath, 'utf8', (err, text) => {
//       if (err) {
//         throw ('error reading file');
//       } else {
//         callback(null, text.split('\n')[0]);
//       }
//     });
//   };  
// };

var pluckFirstLineFromFile = (filePath, callback) => {
  fs.readFile(filePath, 'utf8', (err, text) => {
    if (err) {
      callback(err);
    } else {
      callback(null, text.split('\r')[0]);
    }
  });
  
};




// This function should retrieve the status code of a GET request to `url`
var getStatusCode = (url, callback) => {
  request(url, (err, response, body) => {
    if (err) {
      callback(err);
    } else {
      callback(null, response.statusCode);
    }
  });
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};
