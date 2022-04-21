import React, { useState } from 'react';

export default function BookViewer({}) {
	return (
		<object
			data='/uploads/1.pdf'
			type='application/pdf'
			width='100%'
			height='800px'
		></object>
	);
}
