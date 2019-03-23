import './styles/app.css';
import BookService from './services/BookService';

document.getElementById('book-form')
    .addEventListener('submit', (e) => {
        const title = document.getElementById('title').value;
        const author = document.getElementById('author').value;
        const isbn = document.getElementById('isbn').value;
        const image = document.getElementById('image').files;

        const bookData = new FormData();
        bookData.append('image', image[0]);
        bookData.append('title',title);
        bookData.append('author',author);
        bookData.append('isbn',isbn);

        console.log(bookData);

        const bookService = new BookService();
        bookService.postBook(bookData);

        console.log(bookService);
        e.preventDefault();
    });