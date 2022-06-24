const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const protection = {};

protection.hash = (plainPassword) => {
  const salt = bcrypt.genSaltSync(10);
  const hashed_password = bcrypt.hashSync(plainPassword, salt);
  return hashed_password;
};

protection.compare = (password, hased_password) => {
  return bcrypt.compareSync(password, hased_password);
};

protection.token_generator = async (payload) => {
  return jwt.sign(payload, process.env.SECRET, {
    expiresIn: "2 days",
  });
};

module.exports = protection;

console.log(bcrypt.compare("03041959"));
