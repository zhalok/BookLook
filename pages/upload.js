import {
	TextField,
	Select,
	MenuItem,
	InputLabel,
	FormControl,
	Button,
	Input,
} from '@mui/material';
import { useEffect, useState } from 'react';
import UploadButton from '../components/Buttons/UploadButton';
import DateGenerator from '../utils/DateFormatter';

export default function UploadBook() {
	const [name, setName] = useState('');
	const [author, setAuthor] = useState('');
	const [publication, setPublication] = useState('');
	const [edition, setEdition] = useState('');
	const [availibility, setAvailibility] = useState('');
	const [uploader, setUploader] = useState('');
	const [uploadTime, setUploadTime] = useState('');
	const [file, setFile] = useState('');

	const publications = ['Scaums Outline', 'Talukdar Prokashoni'];
	let editions = ['1st', '2nd', '3rd'];

	useEffect(() => {
		document.body.style.backgroundColor = '#eeeeff';
		// const uploader = localStorage.getItem('user');

		setUploader('zhalok');
	}, []);

	const uploadData = async () => {
		// console.log(uploadTime);
		// alert(uploadTime);
		try {
			const response = await fetch(
				'http://localhost:3000/api/books/uploadInfo',
				{
					method: 'POST',
					headers: {
						'content-type': 'application/json',
					},
					body: JSON.stringify({
						name,
						author,
						publication,
						edition,
						availibility,
						reviews: 0,
						uploader,
						uploadTime,
					}),
				}
			);
			const data = await response.json();
			alert(data[0].id);
		} catch (e) {
			alert('error');
		}
	};

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
					onChange={(e) => {
						setName(e.target.value);
					}}
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
					onChange={(e) => {
						setAuthor(e.target.value);
					}}
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
						{publications.map((value, index) => (
							<MenuItem key={index} value={value}>
								{value}
							</MenuItem>
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
						{editions.map((value, index) => (
							<MenuItem key={index} value={value}>
								{value}
							</MenuItem>
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
					<InputLabel id='demo-simple-select-label'>Available?</InputLabel>
					<Select
						labelId='demo-simple-select-label'
						id='demo-simple-select'
						value={availibility}
						label='Availibility'
						onChange={(e) => {
							setAvailibility(e.target.value);
						}}
					>
						<MenuItem key={0} value={true}>
							Yes
						</MenuItem>
						<MenuItem key={1} value={false}>
							No
						</MenuItem>
					</Select>
				</FormControl>
			</div>
			<div
				style={{
					width: '60%',
					marginLeft: 'auto',
					marginRight: 'auto',
					marginTop: '20px',
				}}
			>
				<UploadButton setFile={setFile} />
			</div>
			<div
				style={{
					width: '60%',
					marginLeft: 'auto',
					marginRight: 'auto',
					marginTop: '20px',
				}}
			>
				<Button
					variant='contained'
					fullWidth
					onClick={() => {
						setUploadTime(DateGenerator());
						uploadData();
					}}
				>
					Submit
				</Button>
			</div>
		</div>
	);
}
