import { Component } from "@angular/core";
import { PostService } from "src/app/shared/services/post.service";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  public messages: string[] = ["msg1","msg2","msg3"];

  constructor(private postService: PostService) {}

  /** TODO
   *
   */
  public loadPosts() {
    console.log("TODO: LoadPost");
    this.postService.loadPosts();
  }

  /** TODO
   *
   */
  public clearList() {
    console.log("TODO: clearList");
    this.messages = [];
  }
}
