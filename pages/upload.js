import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
export default function Uplod() {
	useEffect(() => {
		document.body.style.backgroundColor = '#eeeeff';
	}, []);

	const [bookFile, setBookFile] = useState('');
	const [name, setName] = useState('');
	const [author, setAuthor] = useState('');
	const [publisher, setPublisher] = useState('');
	const [edition, setEdition] = useState('');
	const [catagory, setCatagory] = useState('');
	const [topic, setTopic] = useState('');
	const [uploaderId, setUploaderId] = useState('Zhalok');
	const submitInfo = () => {
		fetch('http://localhost:3000/api/books/uploadInfo', {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify({
				name,
				author,
				catagory,
				topic,
				publisher,
				edition,
				uploaderId,
			}),
		})
			.then((res) => res.json())
			.then((data) => {
				alert(data);
				console.log(data);
			})
			.catch((e) => console.log(e));
	};

	return (
		<div
			style={{
				width: '500px',
				marginLeft: 'auto',
				marginRight: 'auto',
				marginTop: '50px',
			}}
		>
			<Typography variant='h3' component='h2'>
				Contribute
			</Typography>

			<Card sx={{ minWidth: 275, padding: '20px' }}>
				<CardContent>
					<TextField
						fullWidth
						label='Name'
						id='fullWidth'
						value={name}
						onChange={(e) => {
							setName(e.target.value);
						}}
					/>
					<TextField
						fullWidth
						label='Author'
						id='fullWidth'
						style={{ marginTop: '20px' }}
						value={author}
						onChange={(e) => {
							setAuthor(e.target.value);
						}}
					/>
					<TextField
						fullWidth
						label='Publisher'
						id='fullWidth'
						style={{ marginTop: '20px' }}
						value={publisher}
						onChange={(e) => {
							setPublisher(e.target.value);
						}}
					/>
					<TextField
						fullWidth
						label='Edition'
						id='fullWidth'
						style={{ marginTop: '20px' }}
						value={edition}
						onChange={(e) => {
							setEdition(e.target.value);
						}}
					/>
					<TextField
						fullWidth
						label='Catagory'
						id='fullWidth'
						style={{ marginTop: '20px' }}
						value={catagory}
						onChange={(e) => {
							setCatagory(e.target.value);
						}}
					/>
					<TextField
						fullWidth
						label='Topic'
						id='fullWidth'
						style={{ marginTop: '20px' }}
						value={topic}
						onChange={(e) => {
							setTopic(e.target.value);
						}}
					/>
					<div style={{ marginTop: '20px' }}>
						<input type='file' name='book' />
					</div>
					<Button
						fullWidth
						variant='contained'
						color='success'
						style={{ marginTop: '20px' }}
						onClick={() => {
							submitInfo();
						}}
					>
						Upload
					</Button>
				</CardContent>
			</Card>
		</div>
	);
}
