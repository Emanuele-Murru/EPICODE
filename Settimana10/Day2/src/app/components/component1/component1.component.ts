import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/interface.post';
import { PostsService } from 'src/app/service/posts.service';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.scss']
})
export class Component1Component implements OnInit {

  posts!: Post[];
  constructor(private postService: PostsService) {
    this.postService.getPosts().then((posts) => {
      this.posts = posts;
      console.log(this.posts);

    })
  }

  ngOnInit(): void {
  }

}
