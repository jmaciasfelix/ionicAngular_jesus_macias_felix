import { Component } from "@angular/core";
import { BookService } from "src/app/shared/services/book.service";
import { Book } from "src/app/shared/models";
import { ToastController } from '@ionic/angular';

@Component({
  selector: "app-books",
  templateUrl: "./books.page.html",
  styleUrls: ["./books.page.scss"],
})
export class BooksPage {
  state = "loading";
  books: Book[];

  constructor(private bookService: BookService, public toastController: ToastController) {}

  async presentToast(msg:string, color:string) {
    const toast = await this.toastController.create({
      message: msg,
      color: color,
      duration: 2000
    });
    toast.present();
  }

  ionViewWillEnter() {
    this.loadBooks();
  }

  loadBooks(event?) {
    this.state = "loading";
    this.bookService.getBooks().subscribe(
      (books) => {
        this.books = books;
        this.state = "loaded";

        event?.target?.complete();
      },
      (error) => {
        this.state = "error";
        console.log(error);
      }
    );
  }

  deleteBook(idBook: string) {
    console.log(idBook);
    const idNumberBook:number = parseInt(idBook,10);
     this.state = 'loading';
     this.bookService.deleteBook(idNumberBook).subscribe(
       () => {
         this.ionViewWillEnter();
         this.presentToast(`The book has been successfully removed.`, "success");
       },
       () => {
         this.state = 'error';
         this.presentToast(`An error occurred while deleting the book.`, "danger");
       }
     );
  }
}
