import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/interface.post';
import { PostsService } from 'src/app/service/posts.service';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.scss']
})
export class Component2Component implements OnInit {

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
