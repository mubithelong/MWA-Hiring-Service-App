import { Component, OnInit } from '@angular/core';
import { PostService } from '../service/post.service';
import { UserserviceService } from '../service/userservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  post: any = [];
  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.postService.getPost().subscribe(
      (data) => {
        this.post = data;
        console.log(this.post);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
