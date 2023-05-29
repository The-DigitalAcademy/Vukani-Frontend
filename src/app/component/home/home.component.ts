import { Component, Input, OnInit } from '@angular/core';
import { Posts } from 'src/app/interface/posts';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  posts: Posts[] = [];

  @Input() post?: Posts;

  constructor(
    private postService: PostsService
  ){}

  getPosts(){
    this.postService.getAllPosts().subscribe(data => {
      this.posts = data;
    })
  }

  ngOnInit(): void {
    this.getPosts();
  }

}
