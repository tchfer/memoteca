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
  hasMoreThoughts: boolean = true;
  filter: string = '';

  constructor(
    private thoughtService: ThoughtService,
  ) { }

  ngOnInit(): void {
    this.thoughtService.getThoughts(this.currentPage, this.filter).subscribe((thoughtList) => {
      this.thoughtList = thoughtList;
    });
  }

  loadMoreThoughts(): void {
    this.thoughtService.getThoughts(++this.currentPage, this.filter).subscribe(newThoughts => {
      this.thoughtList.push(...newThoughts);
      if(!newThoughts.length) {
        this.hasMoreThoughts = false;
      }
    });
  }

  filterThoughts(): void {
    this.hasMoreThoughts = true;
    this.currentPage = 1;
    this.thoughtService.getThoughts(this.currentPage, this.filter)
      .subscribe((thoughtList) => {
        (this.thoughtList = thoughtList)
      }
    );
  }

}
