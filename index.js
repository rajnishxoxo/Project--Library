let myLibrary = []; //to store Books

function Book(title, author, noOfPages ,read) {
  this.title = title;
  this.author = author;
  this.noOfPages = noOfPages;
  this.read = read
}

function addBookToLibrary() {
  let titleName = document.getElementById("title").value;
  let authorName = document.getElementById("author").value;
  let noOfPages = document.getElementById("pages").value;
  let read = document.getElementById('read');

  if (titleName.value == "" || authorName.value == "" || noOfPages == "") {
    alert("enter the Value please");
  }

  let newBook = new Book(titleName, authorName, noOfPages,read);

    myLibrary.push(newBook);

  // console.log(`${titleName} ${authorName} ${noOfPages}`)
}

const addNewBookButton = document.getElementById("submit_btn");

const displayForm = document.getElementById("new-book-form");

addNewBookButton.addEventListener("click", function () {
  displayForm.style.display = "block";
});

//To render or display Elements..

function render() {
  const libraryEl = document.getElementById("libraryEl");
  let bookEl = document.createElement("div");

  bookEl.setAttribute("class" ,"card")

  for (let i = 0; i < myLibrary.length; i++) {
    let myBook = myLibrary[i];

    console.log(myBook.title)
  }
}

let submitBookDetailBtn = document.getElementById("submit_btn2");

submitBookDetailBtn.addEventListener("click", function (event) {
  addBookToLibrary();
  event.preventDefault();
  console.log(myLibrary);
  let titleName = (document.getElementById("title").value = "");
  let authorName = (document.getElementById("author").value = "");
  let noOfPages = (document.getElementById("pages").value = "");

  if (myLibrary.length != 0) {
    displayForm.style.display = "none";
  } else {
    displayForm.style.display = "block";
  }

  render();
});
