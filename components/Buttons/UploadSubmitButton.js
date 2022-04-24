import {
	TextField,
	Select,
	MenuItem,
	InputLabel,
	FormControl,
	Button,
} from '@mui/material';
export default function UploadSubmitButton({ uploadData }) {
	return (
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
					uploadData();
				}}
			>
				Submit
			</Button>
		</div>
	);
}
