//angular
import { Component } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

//ionic
import { ToastController } from "@ionic/angular";

//services
import { BookService } from "src/app/shared/services/book.service";

//models
import { Book } from "src/app/shared/models";

@Component({
  selector: "app-books",
  templateUrl: "./books.page.html",
  styleUrls: ["./books.page.scss"],
})
export class BooksPage {
  state = "loading";
  books: Book[];

  /**
   * Contructor
   * @param bookService Book service
   * @param toastController Toast controller angular
   * @param translateService Translate service angular
   */
  constructor(
    private bookService: BookService,
    public toastController: ToastController,
    private translateService: TranslateService
  ) {}

  /**
   * Display a message for 2 seconds
   * @param msg Message display in toast
   * @param color Color toast
   */
  async presentToast(msg: string, color: string) {
    const toast = await this.toastController.create({
      message: msg,
      color: color,
      duration: 2000,
    });
    toast.present();
  }

  /**
   * ion view will enter ionic life cycle method
   */
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

  /**
   * Delete a book and reload the list
   * @param idBook id book to delete
   */
  deleteBook(idBook: string): void{
    const idNumberBook: number = parseInt(idBook, 10);
    this.state = "loading";
    this.bookService.deleteBook(idNumberBook).subscribe(
      () => {
        this.ionViewWillEnter();
        this.presentToast(
          this.translateService.instant("MSGS.DELETING_OK"),
          "success"
        );
      },
      () => {
        this.state = "error";
        this.presentToast(
          this.translateService.instant("ERRORS.DELETING"),
          "danger"
        );
      }
    );
  }
}
