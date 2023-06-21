import { Component, OnInit } from '@angular/core';

import { Thought } from './../thought';
import { ThoughtService } from './../thought.service';

@Component({
  selector: 'app-list-thoughts',
  templateUrl: './list-thoughts.component.html',
  styleUrls: ['./list-thoughts.component.css']
})
export class ListThoughtsComponent implements OnInit {

  thoughtList: Thought[] = [];
  currentPage: number = 1;

  constructor(
    private thoughtService: ThoughtService,
  ) { }

  ngOnInit(): void {
    this.thoughtService.getThoughts(this.currentPage).subscribe((thoughtList) => {
      this.thoughtList = thoughtList;
    });
  }

}
