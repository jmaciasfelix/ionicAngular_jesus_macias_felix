import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Post, Brands } from "../models";
import { BrandService } from "./brand.service";

@Injectable({
  providedIn: "root",
})
export class PostService {
  public brands: Brands[];
  public posts;
  constructor(
    private httpClient: HttpClient,
    private brandService: BrandService
  ) {}

  /** TODO
   *
   */
  getPost(): Observable<Post[]> {
    return this.httpClient.get<Post[]>(`${environment.apiUrl}/posts`);
  }
}
