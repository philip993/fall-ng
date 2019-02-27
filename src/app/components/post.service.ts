import { Injectable } from "@angular/core";
import { Post } from "./post.model";
import { Subject } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({ providedIn: "root" })
export class PostService {
  private posts: Post[] = [];
  private postUpdate = new Subject<Post[]>();

  constructor(private http: HttpClient) {}

  //methods
  //get posts
  getPosts() {
    this.http
      .get<{ posts: Post[] }>("http://localhost:3000/posts/all")
      .subscribe(postData => {
        this.posts = postData.posts;
        this.postUpdate.next([...this.posts]);
      });
  }

  // posts observable
  getPostsListener() {
    return this.postUpdate.asObservable();
  }

  //add posts
  addPost(title: string, content: string) {
    const post: Post = {
      _id: null,
      title: title,
      content: content
    };
    this.http
      .post("http://localhost:3000/posts/add", post)
      .subscribe(responseData => {
        console.log("Added");
        this.posts.push(post);
        this.postUpdate.next([...this.posts]);
      });
  }
}
