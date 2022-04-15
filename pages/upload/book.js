import { useEffect, useState } from 'react';
export default function UploadBook() {
	const [name, setName] = useState('');
	const [publication, setPublication] = useState('');
	const [author, setAuthor] = useState('');
	const [reviews, setRviews] = useState(0);
	const [uploader, setUploader] = useState('');
	const [uploadTime, setUploadTime] = useState('');

	useEffect(() => {
		// this useEffect will take the token from the localstorage and then update the uploader
	}, []);
}
