const generateInsertString = ({
	name,
	author,
	publication,
	review,
	availibility,
	uploader,
	uploadTime,
}) => {
	return `insert into books values('${name}','${publication}','${author}','${availibility}','${review}','${uploader}','${uploadTime}')`;
};
