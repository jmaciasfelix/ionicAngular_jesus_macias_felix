import { Component } from '@angular/core';
import { BookService } from 'src/app/shared/services/book.service';
import { Book } from 'src/app/shared/models';

@Component({
  selector: 'app-books',
  templateUrl: './books.page.html',
  styleUrls: ['./books.page.scss']
})
export class BooksPage {
  state = 'loading';
  books: Book[];

  constructor(private bookService: BookService) {}

  ionViewWillEnter() {
    this.loadBooks();
  }

  loadBooks(event?) {
    this.state = 'loading';
    this.bookService.getBooks().subscribe(
      (books) => {
        this.books = books;
        this.state = 'loaded';

        event?.target?.complete();
      },
      (error) => {
        this.state = 'error';
        console.log(error);
      }
    );
  }
}
