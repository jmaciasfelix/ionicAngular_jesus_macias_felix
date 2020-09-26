import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../models';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  constructor(private httpClient: HttpClient) {}

  getBooks(): Observable<Book[]> {
    return this.httpClient.get<Book[]>(`${environment.apiUrl}/books`);
  }

  getBookDetail(id: number): Observable<Book> {
    return this.httpClient.get<Book>(`${environment.apiUrl}/books/${id}`);
  }

  updateBook(book: Book): Observable<Book> {
    return this.httpClient.put<Book>(`${environment.apiUrl}/books/${book.id}`, book);
  }

  deleteBook(id: number): Observable<Book> {
    return this.httpClient.delete<Book>(`${environment.apiUrl}/books/${id}`);
  }

  addBook(book: Book): Observable<number> {
    const id = Math.floor(100000 + Math.random() * 900000);
    return this.httpClient
      .post<Book>(`${environment.apiUrl}/books`, {
        ...book,
        id
      })
      .pipe(map(() => id));
  }
}
