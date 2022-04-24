import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function AvailibilityField({ availibility, setAvailibility }) {
	const options = ['Yes', 'No'];

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
			<Box sx={{ minWidth: 120 }}>
				<FormControl fullWidth>
					<InputLabel id='demo-simple-select-label'>Availbility</InputLabel>
					<Select
						labelId='demo-simple-select-label'
						id='demo-simple-select'
						value={availibility}
						label='Availbility'
						onChange={(e) => {
							setAvailibility(e.target.value);
						}}
					>
						{options.map((info, index) => (
							<MenuItem key={index} value={info == 'Yes' ? true : false}>
								{info}
							</MenuItem>
						))}
					</Select>
				</FormControl>
			</Box>
		</div>
	);
}
