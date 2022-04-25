import { useEffect, useState } from 'react';
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

export default function Catagories({ catagoryStates, show, setShow }) {
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
						{catagoryStates.map((e) => (
							<MenuItem value={e[0].name}>
								<Checkbox
									checked={e[0].selected}
									onChange={(event) => {
										e[1]({ name: e[0].name, selected: event.target.checked });
									}}
								/>
								{e[0].name}
							</MenuItem>
						))}
					</div>

					{/* <Button
						style={{ marginTop: '20px' }}
						onClick={() => {
							let selected = [];
							for (let i = 0; i < catagoryList.length; i++) {
								if (catagoryList[i].selected == true) {
									selected.push(catagoryList[i].name);
								}
							}
							setCatagories(selected);
							setShow(false);
						}}
					>
						Select
					</Button> */}
				</Box>
			</Modal>
		</div>
	);
	// }
}
