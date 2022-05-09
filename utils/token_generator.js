const token_generation = {};

token_generation.generate = (digits) => {
  let token = 0;
  for (let i = 0; i < digits; i++) {
    let cur = Math.floor(Math.random() * 9);
    token *= 10;
    token += cur;
  }

  const expiration_time = new Date().getTime() + 60 * 1000;
  return { token, expiration_time };
};

module.exports = token_generation;

// console.log(token_generation.generate(10));
