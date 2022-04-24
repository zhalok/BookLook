import {
	TextField,
	Select,
	MenuItem,
	InputLabel,
	FormControl,
	Button,
} from '@mui/material';
export default function PublicationField({ publication, setPublication }) {
	return (
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
				label='Publication'
				variant='outlined'
				fullWidth
				value={publication}
				onChange={(e) => {
					setPublication(e.target.value);
				}}
			/>
		</div>
	);
}
