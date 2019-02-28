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
      .get<{ posts: Post[] }>("http://localhost:3000/posts")
      .subscribe(postData => {
        this.posts = postData.posts;
        this.postUpdate.next([...this.posts]);
      });
  }

  // posts observable
  getPostsListener() {
    return this.postUpdate.asObservable();
  }

  deletePost(postId: string) {
    this.http.delete("http://localhost:3000/posts/" + postId).subscribe(() => {
      const updatePost = this.posts.filter(post => post._id !== postId);
      this.posts = updatePost;
      this.postUpdate.next([...this.posts]);
    });
  }

  //add posts
  addPost(title: string, content: string) {
    const post: Post = {
      _id: null,
      title: title,
      content: content
    };
    this.http
      .post<{ postId: string }>("http://localhost:3000/posts", post)
      .subscribe(responseData => {
        console.log("Added");
        const _id = responseData.postId;
        post._id = _id;
        this.posts.push(post);
        this.postUpdate.next([...this.posts]);
      });
  }
}
