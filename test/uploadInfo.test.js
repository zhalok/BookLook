const data = require('./mock_data.json');

async function upload(data) {
	let res = await fetch('http://localhost:3000/api/books/uploadInfo', {
		method: 'POST',
		headers: {
			'content-type': 'application/json',
		},
		body: JSON.stringify(data),
	});

	let response_data = await res.json();
	return response_data;
}
// console.log(data);

test('Testing uploading', () => {
	expect(upload(data)).toBe(1);
});
