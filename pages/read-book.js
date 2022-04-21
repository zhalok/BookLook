import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
// import 'react-pdf/dist/esm/Page/TextLayer.css';

// import './Sample.css';
// import '../styles/globals.css';

export default function PdfViewer({ fileName }) {
	const [file, setFile] = useState('/2018331046-022PB73427.pdf');
	const [numPages, setNumPages] = useState(null);

	function onFileChange(event) {
		setFile(event.target.files[0]);
	}

	function onDocumentLoadSuccess({ numPages: nextNumPages }) {
		setNumPages(nextNumPages);
	}

	return (
		<div className='Example'>
			<header>
				<h1>react-pdf sample page</h1>
			</header>
			<div className='Example__container'>
				<div className='Example__container__load'>
					<label htmlFor='file'>Load from file:</label>{' '}
					<input onChange={onFileChange} type='file' />
				</div>
				<div className='Example__container__document'>
					<Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
						{Array.from(new Array(numPages), (el, index) => (
							<Page key={`page_${index + 1}`} pageNumber={index + 1} />
						))}
					</Document>
				</div>
			</div>
		</div>
	);
}
