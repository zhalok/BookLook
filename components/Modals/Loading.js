import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import CircularProgress from '@mui/material/CircularProgress';

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 'fit-content',
	bgcolor: 'background.paper',
	border: '2px solid #000',
	boxShadow: 24,
	p: 4,
	marginLeft: 'auto',
	marginRight: 'auto',
	padding: '100px',
};

export default function Loading({ show }) {
	return (
		<div>
			<Modal
				open={show}
				aria-labelledby='modal-modal-title'
				aria-describedby='modal-modal-description'
			>
				<Box sx={style}>
					<CircularProgress />
				</Box>
			</Modal>
		</div>
	);
}
