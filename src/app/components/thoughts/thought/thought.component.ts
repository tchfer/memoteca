import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-thought',
  templateUrl: './thought.component.html',
  styleUrls: ['./thought.component.css']
})
export class ThoughtComponent implements OnInit {

  @Input() thought = {
    content: "I love Angular",
    author: "Fernando",
    model: 'modelo2'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
