var mongoose = require('mongoose');
var dbAuth = require('./dbAuth.js');
var Schema = mongoose.Schema;

module.exports.mongoose = mongoose;
module.exports.Schema = Schema;
// Connect to cloud database

connect();

// Connect to mongo
function connect() {
    var url = 'mongodb://' + dbAuth.username + ':' + dbAuth.password + '@' + dbAuth.address;
    mongoose.connect(url);
}

function disconnect() {mongoose.disconnect()}
