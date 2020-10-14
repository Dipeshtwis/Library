let myLibrary = [];

function Book(author, title, num, status){
	this.author = author;
	this.title = title;
	this.num = num;
	this.status = status;
	this.info = `${title} written by ${author} has ${num} pages. ${status}`;
}

function addBookToLibrary(book){
	myLibrary.push(book);
}

// function myFunction(){
	// const author = document.getElementById("author").value;
	// const title = document.getElementById("title").value;
	// const num = document.getElementById("num").value;
	// let status;
	// if(document.getElementById("read").checked)
	// 	status = true;
	// else
	// 	status = false;

	// let book = new Book(author, title, num, status);
	// addBookToLibrary(book);
	// displayBook(myLibrary);
	// alert("hey!!")
// }

function displayBook(myLibrary){
	
	let newBook = document.createElement('div');
	// newBook.textContent = 'Hello';
	body.appendChild(newBook);
	
	for(let i = 0; i < myLibrary.length; i++) {
		let para = document.createElement('p');
		para.innerHTML = `author: ${myLibrary[i].author}`;
		newBook.appendChild(para);
	}
}
const btn = document.getElementById('#click');
if(btn){
	btn.addEventListener('click', () => {
		const author = document.getElementById("author").value;
		const title = document.getElementById("title").value;
		const num = document.getElementById("num").value;
		let status;
		if(document.getElementById("read").checked)
			status = true;
		else
			status = false;

		let book = new Book(author, title, num, status);
		addBookToLibrary(book);
		displayBook(myLibrary);
	});
}
