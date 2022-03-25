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
			const arr = file.originalname.split('.');
			const ext = arr[arr.length - 1];
			const fileName = Date.now() + '.' + ext;

			cb(null, fileName);
		},
	}),
});

const app = nextConnect();

app.use(upload.single('book'));

app.post((req, res) => {
	console.log(req.body.name);
	console.log(req.file);
	res.json({ imageUploadId: req.file.filename.split('.')[0] });
});

export default app;
