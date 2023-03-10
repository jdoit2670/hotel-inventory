import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { Comments } from './comment.interface';
import { CommentService } from './comment.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css'],
})
export class CommentComponent implements OnInit {
  comments$ = this.commentService.getComments();

  comment$ = this.activatedRoute.data.pipe(map((data) => data?.['comments']));

  comments: Comments[] = [];

  constructor(
    private commentService: CommentService,
    private activatedRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.activatedRoute.data.subscribe((data) => {
      this.comments = data['comments'];
    });
  }
}
