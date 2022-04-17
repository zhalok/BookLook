const generateInsertString = ({
	name,
	author,
	publication,
	edition,
	reviews,
	availibility,
	uploader,
	uploadTime,
}) => {
	// console.log(availiblity);
	return `insert into books (name,publication,author,edition,availibility,reviews,uploader,upload_time)  values('${name}','${publication}','${author}','${edition}',${availibility},'${reviews}','${uploader}','${uploadTime}')`;
};

module.exports = generateInsertString;
