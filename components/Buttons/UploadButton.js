import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const Input = styled('input')({
	display: 'none',
});

export default function UploadButton({ setFile, setFileName }) {
	return (
		<Stack direction='row' alignItems='center' spacing={2}>
			<label htmlFor='contained-button-file'>
				<Input
					accept='*'
					id='contained-button-file'
					multiple
					type='file'
					onChange={(e) => {
						setFile(e.target.files[0]);
						if (e.target.files) {
							setFileName(e.target.files[0].name);
						}
					}}
				/>

				<Button variant='contained' component='span' fullWidth color='success'>
					Select File
				</Button>
			</label>
		</Stack>
	);
}
