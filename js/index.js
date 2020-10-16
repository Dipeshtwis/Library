const myLibrary = [];

function Book(author, title, num, status) {
  this.author = author;
  this.title = title;
  this.num = num;
  this.status = status;
}

Book.prototype.read_status = function () {
  let str = '';
  if (this.status === true) {
    str += 'read';
    return str;
  }

  str += 'unread';
  return str;
};

function addBookToLibrary(book) {
  myLibrary.push(book);
  localStorage.setItem('localbook', JSON.stringify(myLibrary));
}

function displayBook(itemsJsonArray) {
  const newBook = document.getElementById('tableBody');
  let str = '';
  itemsJsonArray.forEach((bokk, index) => {
    str += `
    <tr>
      <td> ${index + 1}</td>
      <td> ${bokk.author}</td>
      <td> ${bokk.title}</td>
      <td> ${bokk.num}</td>
      <td> <input onclick="change(this, ${index})" type="button" value="${bokk.status}" id="" class="btn btn-primary"></input></td>
      <td> <button onclick="deleted(${index})" class="btn btn-danger">Delete</button></td>
    </tr>
    `;
  });
  newBook.innerHTML = str;
}

/* eslint-disable no-unused-vars */
function change(elem, index) {
  if (elem.value === 'read') {
    elem.value = 'unread';
  } else {
    elem.value = 'read';
  }
  myLibrary[index].status = elem.value;
}

function deleted(index) {
  myLibrary.splice(index, 1);
  displayBook(myLibrary);
}
/* eslint-enable no-unused-vars */

const form = document.getElementById('form');

const preventRefresh = (event) => {
  event.preventDefault();
};

function addbook() {
  const author = document.getElementById('author').value;
  const title = document.getElementById('title').value;
  const num = document.getElementById('num').value;

  let status;
  if (document.getElementById('read').checked) status = true;
  else status = false;


  const book = new Book(author, title, num, status);
  book.status = book.read_status();
  addBookToLibrary(book);
  const itemsJsonstr = localStorage.getItem('localbook');
  const itemsJsonArray = JSON.parse(itemsJsonstr);
  displayBook(itemsJsonArray);
  form.reset();

  // if (localStorage.getItem('itemsJson') == null) {
  //   itemsJsonArray = [];
  //   itemsJsonArray.push([author, title, num, status]);
  //   localStorage.setItem('itemsJson', JSON.stringify(itemsJsonArray))
  // }
  // else{
  //   itemsJsonstr = localStorage.getItem('itemsJson');

  //   itemsJsonArray.push([author, title, num, status]);
  //   localStorage.setItem('itemsJson', JSON.stringify(itemsJsonArray))
  // }
}

form.addEventListener('submit', addbook);
form.addEventListener('submit', preventRefresh);
