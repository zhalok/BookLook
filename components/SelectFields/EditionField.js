import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function EditionField({ edition, setEdition }) {
	const [editionList, setEditionList] = useState([]);

	useEffect(() => {
		const editions = ['1st', '2nd', '3rd', '4th', '5th'];
		setEditionList(editions);
	}, []);

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
						{editionList.map((info, index) => (
							<MenuItem key={index} value={info}>
								{info}
							</MenuItem>
						))}
					</Select>
				</FormControl>
			</Box>
		</div>
	);
}
