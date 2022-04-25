import { useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Checkbox, Button } from '@mui/material';

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
	bgcolor: 'background.paper',
	border: '2px solid #000',
	boxShadow: 24,
	p: 4,
};

export default function Catagories({
	catagories,
	setCatagories,
	show,
	setShow,
}) {
	let catagorylist = [
		{ name: 'Engineering', selected: false },
		{ name: 'Technology', selected: false },
		{ name: 'Social Science', selected: false },
		{ name: 'Philosophy', selected: false },
		{ name: 'Electronics', selected: false },
		{ name: 'Programming', selected: false },
	];

	useEffect(() => {
		for (let i = 0; i < catagorylist.length; i++) {
			const catagory_name = catagorylist[i].name;
			if (catagories.indexOf(catagory_name) != -1) {
				catagorylist[i].selected = true;
			} else {
				catagorylist[i].selected = false;
			}
		}
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
			<Modal
				open={show}
				onClose={() => {
					setShow(false);
				}}
				aria-labelledby='modal-modal-title'
				aria-describedby='modal-modal-description'
			>
				<Box sx={style}>
					<div
						style={{
							height: '300px',
							overflowY: 'auto',
						}}
					>
						{catagorylist.map((e, index) => (
							<MenuItem key={index} value={e}>
								<Checkbox
									value={e.selected}
									onChange={(event) => {
										e.selected = event.target.checked;
									}}
								/>
								{e.name}
							</MenuItem>
						))}
					</div>

					<Button
						style={{ marginTop: '20px' }}
						onClick={() => {
							let selected = [];
							for (let i = 0; i < catagorylist.length; i++) {
								if (catagorylist[i].selected == true) {
									selected.push(catagorylist[i].name);
								}
							}
							setCatagories(selected);
							setShow(false);
						}}
					>
						Select
					</Button>
				</Box>
			</Modal>
		</div>
	);
}
