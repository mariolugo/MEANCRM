var config = require('./config');
// connect to our database (hosted on modulus.io)
mongoose.connect(config.database);