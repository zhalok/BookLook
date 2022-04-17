const DateGenerator = () => {
	const date = new Date();
	return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
};

module.exports = DateGenerator;
