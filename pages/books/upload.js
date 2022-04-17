import { Button, Box, TextField, FormControl } from '@mui/material';
import { useEffect, useState } from 'react';
export default function UploadBook() {
	const [name, setName] = useState('');
	const [publication, setPublication] = useState('');
	const [author, setAuthor] = useState('');
	const [reviews, setRviews] = useState(0);
	const [availibility, setAvailibility] = useState('');
	const [uploader, setUploader] = useState('');
	const [uploadTime, setUploadTime] = useState('');

	useEffect(() => {}, []);
	return (
		<div>
			<TextField
				id='outlined-basic'
				label='Outlined'
				variant='outlined'
				inputProps={{ name: 'name' }}
			/>
			<Button>Submit</Button>
		</div>
	);
}
