let myLibrary = [
// {
// 	author: "deep",
// 	title: "dep",
// 	num: 24
// }
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
// 
const tabl = document.getElementById('tab');
function displayBook(myLibrary){
	
	const newBook = document.getElementById('tab').getElementsByTagName('tbody')[0];
	newBook.className = "alert";
	tabl.appendChild(newBook);
	
	myLibrary.forEach(bokk);
	function bokk(bokk){
		const single = newBook.insertRow();
		// const single = document.createElement('tr');
		// newBook.className = "alert";
		// newBook.tBodies[0].appendChild(single);

		const au = single.insertCell(0);
		// const au = document.createElement('td');
		// au.className = "alert";
		// au.innerHTML = ` ${bokk.author}`;
		let newCell =document.createTextNode(` ${bokk.author}`);
		au.appendChild(newCell);

		const bu = single.insertCell(1);
		// const au = document.createElement('td');
		// au.className = "alert";
		// au.innerHTML = ` ${bokk.author}`;
		let newCel =document.createTextNode(` ${bokk.title}`);
		bu.appendChild(newCel);

		const cu = single.insertCell(2);
		// const au = document.createElement('td');
		// au.className = "alert";
		// au.innerHTML = ` ${bokk.author}`;
		let newCl =document.createTextNode(` ${bokk.num}`);
		cu.appendChild(newCl);

		const du = single.insertCell(3);
		// const au = document.createElement('td');
		// au.className = "alert";
		// au.innerHTML = ` ${bokk.author}`;
		let newl =document.createTextNode(` ${bokk.status}`);
		du.appendChild(newl);

		// const ti = document.createElement('td');
		// ti.className = "alert";
		// ti.innerHTML = ` ${bokk.title}`;
		// single.appendChild(ti);

		// const nu = document.createElement('td');
		// nu.className = "alert";
		// nu.innerHTML = ` ${bokk.num}`;
		// single.appendChild(nu);

		// const st = document.createElement('td');
		// st.className = "alert";
		// st.innerHTML = ` ${bokk.status}`;
		// single.appendChild(st);
	}
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
