import { Component, OnInit, OnDestroy } from "@angular/core";
import { PostService } from "../post.service";
import { Post } from "../post.model";
import { Subscription } from "rxjs";

@Component({
  selector: "app-posts",
  templateUrl: "./posts.component.html",
  styleUrls: ["./posts.component.css"]
})
export class PostsComponent implements OnInit, OnDestroy {
  posts: Post[] = [];
  private postSubscripton: Subscription;

  constructor(public postService: PostService) {}

  ngOnInit() {
    this.posts = this.postService.getPosts();
    this.postSubscripton = this.postService
      .getPostsListener()
      .subscribe((posts: Post[]) => {
        this.posts = posts;
      });
  }

  ngOnDestroy() {
    this.postSubscripton.unsubscribe();
  }
}
