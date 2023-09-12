const fetchbtn = document.getElementById('fetch-btn');
const dataDisplay = document.getElementById('data');
fetchbtn.addEventListener('click',async () => {

    const books = await fetch('index.json').then(res => 
        res.json())
   books.books.map((book) => {
    const bookName = document.createElement('h1')
    const bookPrice = document.createElement('p')
    const bookDiv = document.createElement('div')
    bookDiv.classList.add('books')
    bookName.classList.add('book-name')
    bookPrice.classList.add('book-price')
    bookName.append(book.name)
    bookPrice.append(book.price)
    bookDiv.append(bookName)
    bookDiv.append(bookPrice)
    dataDisplay.insertAdjacentElement('beforeend',bookDiv)
    })
    
    
  

})

