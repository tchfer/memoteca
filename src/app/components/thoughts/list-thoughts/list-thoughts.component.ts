import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-thoughts',
  templateUrl: './list-thoughts.component.html',
  styleUrls: ['./list-thoughts.component.css']
})
export class ListThoughtsComponent implements OnInit {

  thoughtList = [
    {
      content: "I pass info to child component",
      author: "Parent component",
      model: 'modelo3'
    },
    {
      content: "My prop is decorated with @Input",
      author: "Child component",
      model: 'modelo1'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
