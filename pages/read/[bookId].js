import { useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
function PdfViewer() {
	const viewer = useRef(null);

	useEffect(() => {
		import('@pdftron/webviewer').then(() => {
			WebViewer(
				{
					path: '/webviewer/lib',
					initialDoc: '/files/2018331046-022PB73427.pdf',
				},
				viewer.current
			).then((instance) => {
				const { docViewer } = instance;
				console.log(docViewer);
				// console.log(viewer.current);
				// console.log(docViewer);
			});
		});
	}, []);

	return (
		<div className='MyComponent'>
			{/* <div className='header'>React sample</div> */}
			<div className='webviewer' ref={viewer} style={{ height: '100vh' }}></div>
		</div>
	);
}

// export default dynamic(PdfViewer, { ssr: 'false' });

export default PdfViewer;
