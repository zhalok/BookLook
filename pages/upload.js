import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import { useEffect } from 'react';
import UploadButton from '../components/Buttons/UploadButton';
export default function Uplod() {
	useEffect(() => {
		document.body.style.backgroundColor = '#eeeeff';
	}, []);
	const bull = (
		<Box
			component='span'
			sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
		>
			•
		</Box>
	);

	return (
		<div
			style={{
				width: '500px',
				marginLeft: 'auto',
				marginRight: 'auto',
				marginTop: '90px',
			}}
		>
			<Typography variant='h3' component='h2'>
				Book
			</Typography>
			;
			<Card sx={{ minWidth: 275, padding: '20px' }}>
				<CardContent>
					<TextField fullWidth label='Name' id='fullWidth' />
					<TextField
						fullWidth
						label='Author'
						id='fullWidth'
						style={{ marginTop: '20px' }}
					/>
					<TextField
						fullWidth
						label='Publisher'
						id='fullWidth'
						style={{ marginTop: '20px' }}
					/>
					<TextField
						fullWidth
						label='Edition'
						id='fullWidth'
						style={{ marginTop: '20px' }}
					/>
					<div style={{ marginTop: '20px' }}>
						<input type='file' name='book' />
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
