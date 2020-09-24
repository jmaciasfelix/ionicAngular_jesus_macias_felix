import { Injectable } from '@angular/core';
import { Post, Brands } from "../models";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor() { }

  /** TODO
   * 
   */
  public loadPosts(){
    console.log("TODO: LoadPost PostService");
  }
}


/**
 * book$: Observable<Book> = this.activatedRoute.params.pipe(
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
 */