import { useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
function PdfViewer() {
	const viewer = useRef(null);

	useEffect(() => {
		import('@pdftron/webviewer').then(() => {
			WebViewer(
				{
					path: '/webviewer/lib',
					initialDoc: '/uploads/1647951938033.pdf',
				},
				viewer.current
			).then((instance) => {
				const { docViewer } = instance;
				console.log(docViewer);
			});
		});
	}, []);

	return (
		<div className='MyComponent'>
			<div className='webviewer' ref={viewer} style={{ height: '100vh' }}></div>
		</div>
	);
}

// export default dynamic(PdfViewer, { ssr: 'false' });

export default PdfViewer;
