import { ThoughtService } from './../thought.service';
import { Thought } from './../thought';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-thoughts',
  templateUrl: './list-thoughts.component.html',
  styleUrls: ['./list-thoughts.component.css']
})
export class ListThoughtsComponent implements OnInit {

  thoughtList: Thought[] = [];

  constructor(private thoughtService: ThoughtService) { }

  ngOnInit(): void {
    this.thoughtService.getThoughts().subscribe((thoughtList) => {
      this.thoughtList = thoughtList;
    });
  }

}
