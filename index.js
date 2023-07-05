let myLibrary = []; //to store Books

function Book(title, author, noOfPages, read) {
  this.title = title;
  this.author = author;
  this.noOfPages = noOfPages;
  this.read = read;
}

Book.prototype.toggle=function(){
  this.read = !this.read
}

// function toggle(index){
//   myLibrary[index].changeReadStatus();
  
// }


function addBookToLibrary(title, author, pages) {
  let read = document.getElementById("read");

  if ((read = read.checked)) {
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
  } else {
    read = false;
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
  }
  console.log(myLibrary);
}

let submitBookDetailBtn = document.getElementById("submit_btn2");

submitBookDetailBtn.addEventListener("click", function () {
  console.log("clicked");
  event.preventDefault();

  let titleName = document.getElementById("title").value;
  let authorName = document.getElementById("author").value;
  let noOfPages = document.getElementById("pages").value;

  if (titleName.value == "" || authorName.value == "" || noOfPages == "") {
    alert("enter the Value please");
    return;
  }
  addBookToLibrary(titleName, authorName, noOfPages);

  if (myLibrary.length != 0) {
    displayForm.style.display = "none";
  } else {
    displayForm.style.display = "block";
  }

  const form = document.getElementById("new-book-form");

  form.reset();

  render();
});

//To render or display Elements..

function render() {
  const libraryEl = document.getElementById("libraryEl");
  let bookEl = document.createElement("div");
  let headingElement = document.createElement("h3");

  let authorNameElement = document.createElement("p");

  let pagesInfo = document.createElement("p");

  bookEl.setAttribute("class", "card");

  let removeBookButton = document.createElement('button');
  let changeReadStatus = document.createElement('button');
  
  removeBookButton.addEventListener('click' , ()=>{
    
    libraryEl.removeChild(bookEl)
  })

  

  for (let i = 0; i < myLibrary.length; i++) {
    let myBook = myLibrary[i];
    headingElement.textContent = myBook.title;
    authorNameElement.textContent = myBook.author;
    pagesInfo.textContent = myBook.noOfPages;

    

    removeBookButton.textContent="Remove Book";

    if(myBook.read==true){
      changeReadStatus.textContent = "Read"
      changeReadStatus.style.background="green"
    }else{
      changeReadStatus.textContent = "Not Read"
      changeReadStatus.style.background="red"
    }


    changeReadStatus.addEventListener('click' ,()=>{

      if(myBook.read==true){
        myBook.toggle();
        changeReadStatus.textContent = "Not Read"
        changeReadStatus.style.background="red"
      }else if(myBook.read==false){
        myBook.toggle();
        changeReadStatus.textContent = "Read"
        changeReadStatus.style.background="green"
      }

      
    })

    //

    removeBookButton.setAttribute('id' , "removeBookButton");

    changeReadStatus.setAttribute('id' ,'changeReadStaus')

    console.log(headingElement);
    console.log(authorNameElement);
    console.log(pagesInfo);

    bookEl.append(headingElement);
    bookEl.append(authorNameElement);
    bookEl.append(pagesInfo);

    bookEl.append(removeBookButton)
    bookEl.append(changeReadStatus)

    libraryEl.append(bookEl);
  }
}

const addNewBookButton = document.getElementById("submit_btn");

const displayForm = document.getElementById("new-book-form");

addNewBookButton.addEventListener("click", function () {
  displayForm.style.display = "block";
});
