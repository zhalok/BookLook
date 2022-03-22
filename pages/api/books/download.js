export default function handler(req, res) {
	const { fileName } = req.query;
	const filePath =
		'/home/zhalok/Desktop/Codes/js/NEXT_project/book-look/public/2018331046-022PB73427.pdf';
	res.download(filePath);
}
