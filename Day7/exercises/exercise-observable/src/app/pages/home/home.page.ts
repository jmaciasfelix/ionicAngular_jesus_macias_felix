//angular
import { Component } from "@angular/core";

//RxJS
import { map, take } from "rxjs/operators";
import { Observable, zip } from "rxjs";

//services
import { PostService, BrandService } from "src/app/shared/services";

//models
import { Post, Brands } from "src/app/shared/models";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  public messages: string[];
  /**
   * Contructor
   * @param postService Service post to get posts
   * @param brandService Service brand to get brands
   */
  constructor(
    private postService: PostService,
    private brandService: BrandService
  ) {}

  /**
   * Get the posts and the list of brands
   */
  public loadPosts(): void {
    const post$: Observable<Post[]> = this.postService.getPost();
    const brand$: Observable<Brands[]> = this.brandService.getBrands();

    zip(post$, brand$)
      .pipe(
        take(1),
        map((data) => this.processMsg(data))
      )
      .subscribe(
        (messages) => {
          this.messages = messages;
        },
        (error) => console.log(error)
      );
  }

  /**
   * Return messages hiding restrictive marks
   * @param data Object with the messages and the list of restrictive marks
   */
  private processMsg(data: object): string[] {
    const arrayNew: string[] = [];
    const arrayMsg: string[] = data[0].map(({ message }) => message);
    const arrayRestricBrands: string[] = data[1]
      .filter((brand: Brands) => !brand.isSoldByUs)
      .map(({ name }) => name);

    arrayMsg.forEach((msg) => {
      let isRestrict: boolean = false;
      let brandRestrict: string;
      arrayRestricBrands.forEach((brand) => {
        if (isRestrict === false && msg.includes(brand)) {
          brandRestrict = brand;
          isRestrict = true;
        }
      });
      if (isRestrict) {
        arrayNew.push(
          msg.replace(brandRestrict, this.transformAsterisk(brandRestrict))
        );
      } else {
        arrayNew.push(msg);
      }
    });

    return arrayNew;
  }

  /**
   * Clear the message list
   */
  public clearList(): void {
    this.messages = [];
  }
  /**
   * Transform a string to asterisk
   * @param msg Brand restrict
   * @return String asterisk with same length that msg argument
   */
  public transformAsterisk(msg: string): string {
    let asterisk: string = "";
    for (let index = 0; index < msg.length; index++) {
      asterisk += "*";
    }
    return asterisk;
  }
}
