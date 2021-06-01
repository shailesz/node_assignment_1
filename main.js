import { mkdir, rmdir, writeFile, appendFile, readFile, unlink } from 'fs/promises';

// making a directory
try {
	await mkdir('Directory');
}catch(e){
	console.log(e);
}

// remove directory
try{
	await rmdir('Directory');
}catch(e){
	console.log(e);
}

// create a file
try{
	await writeFile('textFile.txt', 'some text here...');
}catch(e){
	console.log(e);
}

// read content from file
try{
	let buffer = await readFile('textFile.txt'); 
	console.log('content from created file:', buffer.toString());
}catch(e){
	console.log(e);
}

// append some text to file
try{
	await appendFile('textFile.txt', 'more text... ');
}catch(e){
	console.log(e);
}

// read content from file
try{
	let buffer = await readFile('textFile.txt');
	console.log('content after append:', buffer.toString());
}catch(e){
	console.log(e);
}

// delete file
try{
	await unlink('textFile.txt');
}catch(e){
	console.log(e);
}
