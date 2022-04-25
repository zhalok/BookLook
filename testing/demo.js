const arr = ['zhalok', 'kaifa'];

for (let i = 0; i < arr.length; i++) {
	const obj = {};
	obj.name = arr[i];
	obj.age = 23;
	arr[i] = obj;
}

console.log(arr);
