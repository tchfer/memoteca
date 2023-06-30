import { Component, OnInit } from '@angular/core';

import { Thought } from './../thought';
import { ThoughtService } from './../thought.service';
import { Router } from '@angular/router';

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
  favoriteThoughts: boolean = false;
  favoriteList: Thought[]= [];

  constructor(
    private thoughtService: ThoughtService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.thoughtService.getThoughts(this.currentPage, this.filter, this.favoriteThoughts).subscribe((thoughtList) => {
      this.thoughtList = thoughtList;
    });
  }

  loadMoreThoughts(): void {
    this.thoughtService.getThoughts(++this.currentPage, this.filter, this.favoriteThoughts).subscribe(newThoughts => {
      this.thoughtList.push(...newThoughts);
      if(!newThoughts.length) {
        this.hasMoreThoughts = false;
      }
    });
  }

  filterThoughts(): void {
    this.hasMoreThoughts = true;
    this.currentPage = 1;
    this.thoughtService.getThoughts(this.currentPage, this.filter, this.favoriteThoughts)
      .subscribe((thoughtList) => {
        (this.thoughtList = thoughtList)
      }
    );
  }

  listFavoriteThoughts(): void {
    this.favoriteThoughts = true;
    this.hasMoreThoughts = true;
    this.currentPage = 1;
    this.thoughtService.getThoughts(this.currentPage, this.filter, this.favoriteThoughts)
      .subscribe(favoriteThoughtsList => {
        this.thoughtList = favoriteThoughtsList
        this.favoriteList = favoriteThoughtsList
      });
  }

  reloadComponent(): void {
    // location.reload(); Not a great option as it reloads the whole page
    this.favoriteThoughts = false;
    this.currentPage = 1;

    // router reuses instance when navigating to that same component.
    // This tells angular we don't want to reuse routes
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload'; // reload or ignore
    this.router.navigate([this.router.url]);
  }

}
