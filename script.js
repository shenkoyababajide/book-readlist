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
bookList = document.querySelector('.book-list')
const deleteBtn = document.querySelector('.delete')
const inputField = document.querySelector('.search-btn input')
const bookTitle = document.querySelectorAll('.book-title')
let toggler = true

addBookBtn.addEventListener('click', (e) =>{
    e.preventDefault;

    if(toggler){
        addBookPanel.style.display = 'flex'
        closeBtn.style.display = 'unset'
        addBookBtn.style.display = 'none'
        findBookBtn.style.display = 'none'
    }
})

findBookBtn.addEventListener('click', (e) =>{
    e.preventDefault();

    if(toggler){
        searchBookPanel.style.display = 'flex'
        closeBtn.style.display = 'unset'
        findBookBtn.style.display = 'none'
        addBookBtn.style.display = 'none'
    }
})

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

addABook.addEventListener('click', (e)=>{
    e.preventDefault()

    const div_booklist = document.createElement('div')
    div_booklist.classList.add('book-list')

    const div_bookitem = document.createElement('div')
    div_bookitem.classList.add('book-item')

    const div_bookinfo = document.createElement('div')
    div_bookinfo.classList.add('book-info')

    const p_booktitle = document.createElement('p')
    p_booktitle.classList.add('book-title')
    p_booktitle.textContent = bookName.value

    const div_authorinfo = document.createElement('div')
    div_authorinfo.classList.add('author-info')

    const a_delete = document.createElement('a')
    a_delete.classList.add('delete')
    a_delete.textContent = 'delete'

    const p_author = document.createElement('p')
    p_author.classList.add('author-name')
    p_author.textContent = bookAuthor.value

    const div_dateread = document.createElement('div')
    div_dateread.classList.add('date')

    const p_readyear = document.createElement('p')
    p_readyear.classList.add('read-year')
    p_readyear.textContent = 'Read In'

    const p_year = document.createElement('p')
    p_year.classList.add('year')
    p_year.textContent = bookYear.value

    div_booklist.appendChild(div_bookitem).appendChild(div_bookinfo).appendChild(p_booktitle)

    div_booklist.appendChild(div_bookitem).appendChild(div_bookinfo).appendChild(div_authorinfo)

    div_booklist.appendChild(div_bookitem).appendChild(div_bookinfo).appendChild(div_authorinfo).appendChild(p_author)

    div_booklist.appendChild(div_bookitem).appendChild(div_bookinfo).appendChild(div_authorinfo).appendChild(div_dateread).appendChild(p_readyear)

    div_booklist.appendChild(div_bookitem).appendChild(div_bookinfo).appendChild(div_authorinfo).appendChild(div_dateread).appendChild(p_year)

    div_booklist.appendChild(div_bookitem).appendChild(div_bookinfo).appendChild(a_delete)

//    bookListContainer.appendChild(div_booklist)
    bookListContainer.insertBefore(div_booklist, bookListContainer.firstChild)

    bookName.value = ''
    bookAuthor.value = ''
    bookYear.value= ''

    addBookPanel.style.display = 'none'
    searchBookPanel.style.display = 'none'
    closeBtn.style.display = 'none'
    addBookBtn.style.display = 'unset'
    findBookBtn.style.display = 'unset'
})

bookListContainer.addEventListener('click', (e)=>{
    e.preventDefault()
    if(e.target.classList == 'delete'){
        let remove = e.target.parentElement.parentElement.parentElement
        remove.parentElement.removeChild(remove)
    }
})

inputField.addEventListener('keyup', (e)=>{
    e.preventDefault()
    let searchStr = e.target.value.toLowerCase()
    bookTitle.forEach((title)=>{
        if(title.textContent.toLowerCase().indexOf(searchStr) != -1){
            title.parentElement.parentElement.parentElement.style.display = 'block'
        }else{
            title.parentElement.parentElement.parentElement.style.display = 'none'
        }
    })
})