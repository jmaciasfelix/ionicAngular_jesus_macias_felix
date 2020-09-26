import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Post, Brands } from "../models";

@Injectable({
  providedIn: "root",
})
export class PostService {
  public brands: Brands[];
  constructor(private httpClient: HttpClient) {}

  /**
   *  Observable to get posts
   * @return Observable Post[]
   */
  getPost(): Observable<Post[]> {
    return this.httpClient.get<Post[]>(`${environment.apiUrl}/posts`);
  }
}
