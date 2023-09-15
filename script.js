const fetchbtn = document.getElementById('fetch-btn');
const dataDisplay = document.getElementById('data');
fetchbtn.addEventListener('click',async () => {
    // const bookName = document.createElement('h1')
    // const bookPrice = document.createElement('p')
    // const bookDiv = document.createElement('div')
    // bookDiv.classList.add('books')
    // bookName.classList.add('book-name')
    // bookPrice.classList.add('book-price')
    const books = await fetch('index.json').then(res => 
        res.json())
   books.books.map((book) => {
    const ele = `<div class="card"><h1 class="card-head"> Name = ${book.name} </h2> <p class="card-price"> Price =  ${book.price} </p></div>`
    dataDisplay.insertAdjacentHTML('beforeend',ele)
    })
    
    
  

})

