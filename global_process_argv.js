function grab(flag) {
	let index = process.argv.indexOf(flag);
	return (index === -1) ? null : process.argv[index+1];
}

let greeting = grab('--greeting');
let user = grab('--user');

if (!user || !greeting) {
	console.log("No username or greeting provided");
} else {
	console.log(`Welcome ${user}, ${greeting}`);
}

