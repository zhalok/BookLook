import { Checkbox } from '@mui/material';
export default function Catagory() {
	const [checked, setChecked] = useState(false);
	return (
		<div>
			<Checkbox
				checked={checked}
				onChange={(event) => {
					setChecked(event.target.checked);
				}}
			/>
		</div>
	);
}
