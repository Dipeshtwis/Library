let myLibrary = [];

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

const tabl = document.getElementById('tab');
function displayBook(myLibrary){
	
	const newBook = document.getElementById('tab').getElementsByTagName('tbody')[0];
	newBook.className = "alert";
	tabl.appendChild(newBook);
	
	myLibrary.forEach(bokk);
	function bokk(bokk){
		const single = newBook.insertRow();
		const au = single.insertCell(0);
		let newCell =document.createTextNode(` ${bokk.author}`);
		au.appendChild(newCell);

		const bu = single.insertCell(1);
		let newCel = document.createTextNode(` ${bokk.title}`);
		bu.appendChild(newCel);

		const cu = single.insertCell(2);
		let newCl = document.createTextNode(` ${bokk.num}`);
		cu.appendChild(newCl);

		const du = single.insertCell(3);
		let newl = document.createTextNode(` ${bokk.status}`);
		du.appendChild(newl);

		const btnCell = single.insertCell(4);
		let delBtn = document.createElement('button');
		delBtn.className = 'btn btn-danger';
		delBtn.textContent = 'Delete';
		btnCell.appendChild(delBtn);

		// const ti = document.createElement('td');
		// ti.className = "alert";
		// ti.innerHTML = ` ${bokk.title}`;
		// single.appendChild(ti);
	}
}

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
