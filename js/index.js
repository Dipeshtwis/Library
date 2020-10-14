let myLibrary = [
{
	author: "deep",
	title: "dep",
	num: 24
}
];

function Book(author, title, num, status){
	this.author = author;
	this.title = title;
	this.num = num;
	this.status = status;
	this.info = `${title} written by ${author} has ${num} pages. ${status}`;
}

function addBookToLibrary(book){
	myLibrary.push(book)
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
const from = document.getElementById("container");
function displayBook(myLibrary){
	
	const newBook = document.createElement('div');
	newBook.className = "alert";
	 newBook.textContent = 'Hello';
	document.body.append(newBook);
	
	myLibrary.forEach(bokk);
	function bokk(bokk){
		const single = document.createElement('p');
		newBook.className = "alert";
		newBook.appendChild(single);

		const au = document.createElement('span');
		au.className = "alert";
		au.innerHTML = `author: ${bokk.author}`;
		single.appendChild(au);

		const ti = document.createElement('span');
		ti.className = "alert";
		ti.innerHTML = `title: ${bokk.title}`;
		single.appendChild(ti);

		const nu = document.createElement('span');
		nu.className = "alert";
		nu.innerHTML = `pages: ${bokk.num}`;
		single.appendChild(nu);
	}
	// for(let i = 0; i < myLibrary.length; i++) {
		
	// }
}

// displayBook(myLibrary);
const btn = document.getElementById('click');
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
