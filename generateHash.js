const bcrypt = require('bcryptjs');

const plainPassword = 'testpassword';
const salt = bcrypt.genSaltSync(10);
const hashedPassword = bcrypt.hashSync(plainPassword, salt);

console.log(hashedPassword);
