import { Injectable } from "@angular/core";
import { Post } from "./post.model";
import { Subject } from "rxjs";

@Injectable({ providedIn: "root" })
export class PostService {
  private posts: Post[] = [];
  private postUpdate = new Subject<Post[]>();

  //methods
  //get posts
  getPosts() {
    return [...this.posts];
  }

  // posts observable
  getPostsListener() {
    return this.postUpdate.asObservable();
  }

  //add posts
  addPost(title: string, content: string) {
    const post: Post = {
      title: title,
      content: content
    };
    this.posts.push(post);
    this.postUpdate.next([...this.posts]);
  }
}
