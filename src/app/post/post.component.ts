import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { postsMock } from '../data/posts.mock';
import { Post } from '../models/post.interface';
import { GetDataService } from '../services/get-data.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  posts: Post[] = postsMock
  post?: Post;
  isLoading = false;
  // id!: Number;

  constructor(private route: ActivatedRoute, private service: GetDataService) { }

  ngOnInit(): void {
    this.post = postsMock.find((post) => post.slug === this.route.snapshot.params['slug']);

    this.isLoading = true;
    this.service.getData().subscribe(
      (response) => {
        this.posts = response;

        this.isLoading = false;
      }
    );

    this.route.params.subscribe(
      (response) => {
        this.post = this.posts.find((post) => post.slug === this.route.snapshot.params['slug']);
        // this.id = this.post!.id;
        this.isLoading = false;
      }
    );
  }
}