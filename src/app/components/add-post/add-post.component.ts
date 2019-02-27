import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { PostService } from "../post.service";

@Component({
  selector: "app-add-post",
  templateUrl: "./add-post.component.html",
  styleUrls: ["./add-post.component.css"]
})
export class AddPostComponent implements OnInit {
  constructor(public postService: PostService) {}

  ngOnInit() {}

  onAddPost(form: NgForm) {
    if (form.invalid) {
      return;
    }

    this.postService.addPost(form.value.title, form.value.content);
    form.resetForm();
  }
}
