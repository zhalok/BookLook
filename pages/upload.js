import {
	TextField,
	Select,
	MenuItem,
	InputLabel,
	FormControl,
} from '@mui/material';
import { useEffect, useState } from 'react';

export default function UploadBook() {
	const [name, setName] = useState('');
	const [author, setAuthor] = useState('');
	const [publication, setPublication] = useState('');
	const [edition, setEdition] = useState('');
	const [availibility, setAvailibility] = useState('');
	const [uploader, setUploader] = useState('');
	const [uploadTime, setUploadTime] = useState('');

	const publications = ['Scaums Outline', 'Talukdar Prokashoni'];
	let editions = ['1st', '2nd', '3rd'];

	useEffect(() => {
		document.body.style.backgroundColor = '#eeeeff';
		const uploader = localStorage.getItem('user');
		setUploader(uploader);
	}, []);

	return (
		<div
			style={{
				marginLeft: 'auto',
				marginRight: 'auto',
				width: '40%',
				marginTop: '100px',
				backgroundColor: 'white',
				padding: '20px',
			}}
		>
			<h2 style={{ textAlign: 'center' }}>Contribute</h2>

			<div
				style={{
					width: '60%',
					marginLeft: 'auto',
					marginRight: 'auto',
					backgroundColor: '#eeeeff',
					marginTop: '40px',
				}}
			>
				<TextField
					id='outlined-basic'
					label='Name'
					variant='outlined'
					fullWidth
				/>
			</div>
			<div
				style={{
					width: '60%',
					marginLeft: 'auto',
					marginRight: 'auto',
					backgroundColor: '#eeeeff',
					marginTop: '20px',
				}}
			>
				<TextField
					id='outlined-basic'
					label='Author'
					variant='outlined'
					fullWidth
				/>
			</div>
			<div
				style={{
					width: '60%',
					marginLeft: 'auto',
					marginRight: 'auto',
					backgroundColor: '#eeeeff',
					marginTop: '20px',
				}}
			>
				<FormControl fullWidth>
					<InputLabel id='demo-simple-select-label'>Publication</InputLabel>
					<Select
						labelId='demo-simple-select-label'
						id='demo-simple-select'
						value={publication}
						label='Publicaion'
						onChange={(e) => {
							setPublication(e.target.value);
						}}
					>
						{publications.map((value) => (
							<MenuItem value={value}>{value}</MenuItem>
						))}
					</Select>
				</FormControl>
			</div>
			<div
				style={{
					width: '60%',
					marginLeft: 'auto',
					marginRight: 'auto',
					backgroundColor: '#eeeeff',
					marginTop: '20px',
				}}
			>
				<FormControl fullWidth>
					<InputLabel id='demo-simple-select-label'>Edition</InputLabel>
					<Select
						labelId='demo-simple-select-label'
						id='demo-simple-select'
						value={edition}
						label='Edition'
						onChange={(e) => {
							setEdition(e.target.value);
						}}
					>
						{editions.map((value) => (
							<MenuItem value={value}>{value}</MenuItem>
						))}
					</Select>
				</FormControl>
			</div>
		</div>
	);
}
