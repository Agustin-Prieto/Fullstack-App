import './styles/app.css';
import UI from './UI';

document.addEventListener('DOMContentLoaded', () => {
    const ui = new UI();
    ui.renderBooks()
});

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

        const ui = new UI();
        ui.addANewBook(bookData);

        e.preventDefault();
    });