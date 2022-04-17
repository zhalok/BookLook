const generateInsertString = ({
	name,
	author,
	publication,
	reviews,
	availibility,
	uploader,
	uploadTime,
}) => {
	// console.log(availiblity);
	return `insert into books (name,publication,author,availibility,reviews,uploader,upload_time)  values('${name}','${publication}','${author}',${availibility},'${reviews}','${uploader}','${uploadTime}')`;
};

module.exports = generateInsertString;
