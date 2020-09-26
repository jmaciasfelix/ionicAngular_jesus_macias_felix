import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap, take, tap, filter } from 'rxjs/operators';
import { Book } from 'src/app/shared/models';
import { BookService } from 'src/app/shared/services/book.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.page.html',
  styleUrls: ['./book-detail.page.scss']
})
export class BookDetailPage implements OnInit {
  book$: Observable<Book> = this.activatedRoute.params.pipe(
    take(1),
    map((params) => params?.id),
    tap((id) => (this.isNew = id === 'new')),
    filter((id) => id !== 'new'),
    switchMap((id) => this.bookService.getBookDetail(id)),
    tap((book) => {
      this.book = book;
      this.form.patchValue(book);
    })
  );
  book: Book;
  state = 'loaded';
  isNew = false;

  form: FormGroup = this.formBuilder.group({
    title: ['', [Validators.required, Validators.minLength(3)]],
    language: ['', [Validators.required, Validators.minLength(3)]],
    edition: [''],
    publisher: ['']
  });

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private bookService: BookService,
    private formBuilder: FormBuilder,
    private toastController: ToastController,
    private translateService: TranslateService
  ) {}

  ngOnInit() {}

  submitForm() {
    this.state = 'loading';

    const oldBook = { ...this.book };
    this.book = { ...this.book, ...this.form.value };

    if (this.isNew) {
      this.bookService.addBook(this.book).subscribe(
        (id) => {
          this.state = 'loaded';
          this.presentToast();
          this.router.navigate([`/books/${id}`]);
        },
        (error) => {
          console.log(error);
          this.state = 'error';
          this.book = { ...oldBook };
        }
      );
    } else {
      this.bookService.updateBook(this.book).subscribe(
        () => {
          this.state = 'loaded';
          this.presentToast();
        },
        (error) => {
          console.log(error);
          this.state = 'error';
          this.book = { ...oldBook };
        }
      );
    }
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: this.translateService.instant('MSGS.OPERATION_OK'),
      duration: 2000
    });
    toast.present();
  }

  deleteBook() {
    this.state = 'loading';
    this.bookService.deleteBook(this.book.id).subscribe(
      () => {
        this.state = 'loaded';
        this.router.navigate(['/books']);
      },
      (error) => {
        console.log(error);
        this.state = 'error';
      }
    );
  }
}
