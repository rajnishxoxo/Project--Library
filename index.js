let myLibrary = [];



function Book(name,author,noOfPages) {

    this.name=name;
    this.author=author;
    this.noOfPages=noOfPages;
}

let bookOne = new Book('Game of Thrones' , 'R.R Martin' , '1200');

myLibrary.push(bookOne);

let bookTwo = new Book('UnderStanding Object' , 'Rajnish', '200');

myLibrary.push(bookTwo);

console.log(myLibrary)

function DisplayBook(){
    myLibrary.forEach(element => {
        console.log(element.name)
        console.log(element.author)
        console.log(element.noOfPages)
    });
}
DisplayBook();


// function addBookToLibrary(name,author,noOfPages) {
    
//     let BookName = prompt('Please Provide Book Name');
//     let authorName = prompt('please provide Author Name');
//     let numberOfPages = prompt('how many pages')
//     let bookInfo ={

//         name: BookName,
//         author:authorName,
//         Pages : numberOfPages
//     }

//     myLibrary.push(bookInfo)

//   }





  