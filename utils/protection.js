const bcrypt = require("bcrypt");

const protection = {};

protection.hash = (plainPassword) => {
  const salt = bcrypt.genSaltSync(10);
  const hashed_password = bcrypt.hashSync(plainPassword, salt);
  return hashed_password;
};

protection.compare = (password, hased_password) => {
  return bcrypt.compareSync(password, hased_password);
};

module.exports = protection;
