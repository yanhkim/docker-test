const dotenv = require('dotenv');

dotenv.config({ path: './.env' });

module.exports = {
  FOOBAR: process.env.FOOBAR,
};
