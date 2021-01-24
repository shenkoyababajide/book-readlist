// Grab all the classes for the program
const addBookBtn = document.querySelector('.new-book')
const findBookBtn = document.querySelector('.find-book')
const addBookPanel = document.querySelector('.new-add-panel')
const searchBookPanel = document.querySelector('.search-panel')
const closeBtn = document.querySelector('.closeBtn')
const addABook = document.querySelector('.add-btn')
const bookName = document.querySelector('.book-name')
const bookAuthor = document.querySelector('.book-author')
const bookYear = document.querySelector('.date-input')
const bookListContainer = document.querySelector('.book-list-container')
const bookList = document.querySelector('.book-list')
const deleteBtn = document.querySelector('.delete')
const inputField = document.querySelector('.search-btn input')
const bookTitle = document.querySelectorAll('.book-title')



// Add Book and Find Book open and close toggler
let toggler = true



// Open the new-book addition field
addBookBtn.addEventListener('click', (e) =>{
    e.preventDefault;

    if(toggler){
        addBookPanel.style.display = 'flex'
        closeBtn.style.display = 'unset'
        addBookBtn.style.display = 'none'
        findBookBtn.style.display = 'none'
    }
})



// Open the search-field for to search book list
findBookBtn.addEventListener('click', (e) =>{
    e.preventDefault();

    if(toggler){
        searchBookPanel.style.display = 'flex'
        closeBtn.style.display = 'unset'
        findBookBtn.style.display = 'none'
        addBookBtn.style.display = 'none'
    }
})



// Add Book and Find Book close btn
closeBtn.addEventListener('click', (e)=>{
    e.preventDefault()
    if(toggler){
        addBookPanel.style.display = 'none'
        searchBookPanel.style.display = 'none'
        closeBtn.style.display = 'none'
        addBookBtn.style.display = 'unset'
        findBookBtn.style.display = 'unset'
    }
})



// On clicking AddBook, do the following:
// 1. clone a div node,
// 2. edit its content based on input,
// 3. add the edited div into the DOM
// 4. grab the every title, author and year for storage into local storage per click
addABook.addEventListener('click', (e)=>{
    e.preventDefault()

    // clone a node
    const clonedDiv = bookList.cloneNode(true)

    // edit nodes based on user input
    clonedDiv.querySelector('.book-title').textContent = bookName.value
    clonedDiv.querySelector('.author-name').textContent = bookAuthor.value
    clonedDiv.querySelector('.year').textContent = bookYear.value

    // edit styles of select node for appearance
    clonedDiv.querySelector('.deactivated').className = 'delete'
    clonedDiv.querySelector('.fas.fa-ban').style.display = 'none'

    // insert edited clone into DOM as first child
    bookListContainer.insertBefore(clonedDiv, bookListContainer.firstChild)

    //reset the input fields after clicking Add Book
    bookName.value = ''
    bookAuthor.value = ''
    bookYear.value= ''

    // remove the AddBook field upon adding a newbook
    addBookPanel.style.display = 'none'
    searchBookPanel.style.display = 'none'
    closeBtn.style.display = 'none'
    addBookBtn.style.display = 'unset'
    findBookBtn.style.display = 'unset'

    // grab the new book input from user
    const title = clonedDiv.querySelector('.book-title').textContent
    const author = clonedDiv.querySelector('.author-name').textContent
    const year = clonedDiv.querySelector('.year').textContent

    // store the input as an object
    let newBook = {
        title: title,
        author: author,
        year: year
    }

    // add an empty array if local storage is initially empty
    if(localStorage.getItem('storedBooks') == null){
        localStorage.setItem('storedBooks', '[]')
    }

    // push new book information into the array and save it on local storage for use later
    const storedBooks = JSON.parse(localStorage.getItem('storedBooks'))
    storedBooks.push(newBook)
    localStorage.setItem('storedBooks', JSON.stringify(storedBooks))

})



// grab stored books, and insert into the DOM upon window load
document.addEventListener('DOMContentLoaded', (e)=>{
    // grab the books stored in the local storage
    const oldBooks = JSON.parse(localStorage.getItem('storedBooks'))

    //loop through each book and add to DOM
    oldBooks.forEach((oldBook)=>{
    // clone a node
    const clonedDiv = bookList.cloneNode(true)

    // edit nodes based on user input
    clonedDiv.querySelector('.book-title').textContent = oldBook.title
    clonedDiv.querySelector('.author-name').textContent = oldBook.author
    clonedDiv.querySelector('.year').textContent = oldBook.year

    // edit styles of select node for appearance
    clonedDiv.querySelector('.deactivated').className = 'delete'
    clonedDiv.querySelector('.fas.fa-ban').className = 'far fa-trash-alt'

    // insert edited clone into DOM as first child
    bookListContainer.insertBefore(clonedDiv, bookListContainer.firstChild)
    })
})



// delete an item from the book list on clicking delete
bookListContainer.addEventListener('click', (e)=>{
    e.preventDefault()

    // grab the books array in the local storage
    const oldBooks = JSON.parse(localStorage.getItem('storedBooks'))

    // loop through each book and remove both the booklist from the DOM and local storage
    if(e.target.className == 'delete'){
        let parent = e.target.parentElement.parentElement.parentElement
        parent.style.display = 'none'

        oldBooks.forEach((oldBook)=>{
            if(e.target.parentElement.querySelector('.book-title').textContent == oldBook.title){
                let deleted = oldBooks.findIndex(oldBook => oldBook.title === e.target.parentElement.querySelector('.book-title').textContent)
    
                oldBooks.splice(deleted, 1)
    
                localStorage.setItem('storedBooks', JSON.stringify(oldBooks))
            }
        })
    }
})

// searching the books for matching titles
inputField.addEventListener('keyup', (e)=>{
    e.preventDefault()
//  grab the input text and all books
    let searchStr = e.target.value.toLowerCase()
    const titleLists = document.querySelectorAll('.book-list')

//  loop through the books, and filter based on search input
    titleLists.forEach((titleList)=>{
        let titleName = titleList.querySelector('.book-title').textContent
        if(titleName.toLowerCase().indexOf(searchStr) != -1){
            titleList.style.display = 'flex'
        }else{
            titleList.style.display = 'none'
        }
    })
})