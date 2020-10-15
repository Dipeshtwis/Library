let myLibrary = [];

function Book(author, title, num, status){
	this.author = author;
	this.title = title;
	this.num = num;
	this.status = status;
}

Book.prototype.read_status = function(){
	let str = "";
	if(this.status == true){
		str += 'read'
		return str;
	}
	else{
		str += 'unread'
		return str;
	}
};

function addBookToLibrary(book){
	myLibrary.push(book)
}

function displayBook(myLibrary){
	
	const newBook = document.getElementById('tableBody');
	let str = "";
	myLibrary.forEach((bokk, index) => {
		str += `
		<tr>
		<td> ${index + 1}</td>
		<td> ${bokk.author}</td>
		<td> ${bokk.title}</td>
		<td> ${bokk.num}</td>
		<td> <input onclick="change(this, ${index})" type="button" value="${bokk.status}" id="" class="btn btn-primary"></input></td>
		<td> <button onclick="deleted(${index})" class="btn btn-danger">Delete</button></td>
		</tr>
		`
	});
	tableBody.innerHTML = str;
}

function change(elem, index) {
	// var elem = document.getElementById("myButton1");
	if (elem.value =="read") {
		elem.value = "unread";
	}	else {
		elem.value = "read";
	}
	myLibrary[index].status = elem.value;
}

function deleted(index){
	myLibrary.splice(index, 1);
	displayBook(myLibrary);
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
		book.status = book.read_status();
		addBookToLibrary(book);
		displayBook(myLibrary);
	});
}
