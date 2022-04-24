import {
	TextField,
	Select,
	MenuItem,
	InputLabel,
	FormControl,
	Button,
} from '@mui/material';
export default function EditionField({ edition, setEdition }) {
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
				label='Edition'
				variant='outlined'
				fullWidth
				value={edition}
				onChange={(e) => {
					setEdition(e.target.value);
				}}
			/>
		</div>
	);
}
