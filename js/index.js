let myLibrary = []

function Book(author, title, num, status){
	this.author = author;
	this.title = title;
	this.num = num;
	this.status = status;
}

function addBookToLibrary(book){
	myLibrary.push(book);
	displayBook(myLibrary);
}

function myFunction(){
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
alert("hey!!")
}

function displayBook(myLibrary){
	for (var i = 0; i < myLibrary.length; i++) {
		console.log(myLibrary[i]);
	}
}

// const btn = document.querySelector('#click');
// btn.addEventListener('click', () => {
// alert("Hey!");
// });