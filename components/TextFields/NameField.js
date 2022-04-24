import {
	TextField,
	Select,
	MenuItem,
	InputLabel,
	FormControl,
	Button,
} from '@mui/material';
export default function NameField({ name, setName }) {
	return (
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
				value={name}
				onChange={(e) => {
					setName(e.target.value);
				}}
			/>
		</div>
	);
}
