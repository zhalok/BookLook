const nextConnect = require('next-connect');
const multer = require('multer');
export const config = {
	api: {
		bodyParser: false,
	},
};

const upload = multer({
	storage: multer.diskStorage({
		destination: './public/uploads',
		filename: (req, file, cb) => {
			console.log(req.query);
			const arr = file.originalname.split('.');
			const ext = arr[arr.length - 1];
			const fileName = req.query.filename + '.' + ext;

			cb(null, fileName);
		},
	}),
});

const app = nextConnect();

app.use(upload.single('book'));

app.post((req, res) => {
	res.status(200).json({ message: 'ok' });
});

export default app;
