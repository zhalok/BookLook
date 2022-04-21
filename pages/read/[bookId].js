import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import storage from '../../utils/firebaseConnection';
import { ref, getDownloadURL } from 'firebase/storage';
export default function BookViewer({}) {
	const router = useRouter();
	const { bookId } = router.query;
	const [fileUrl, setFileUrl] = useState('');
	useEffect(() => {
		const fileRef = ref(storage, `${bookId}`);
		getDownloadURL(fileRef).then((url) => {
			setFileUrl(url);
		});
	}, []);

	return (
		<object
			data={fileUrl}
			type='application/pdf'
			width='100%'
			height='800px'
		></object>
	);
}
