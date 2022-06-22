const DateGenerator = () => {
  const date = new Date();
  return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
};

// console.log(new Date().getTime());
module.exports = DateGenerator;

console.log(DateGenerator());
