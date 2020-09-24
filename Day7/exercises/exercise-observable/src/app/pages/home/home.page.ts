import { Component } from '@angular/core';
import { PostService } from 'src/app/shared/services/post.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private postService: PostService) {}

  /** TODO
   * 
   */
  public loadPosts(){
    console.log("TODO: LoadPost");
    this.postService.loadPosts();
  }

  /** TODO
   * 
   */
  public clearList(){
    console.log("TODO: clearList");
  }
}
