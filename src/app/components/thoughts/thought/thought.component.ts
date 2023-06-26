import { Thought } from './../thought';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-thought',
  templateUrl: './thought.component.html',
  styleUrls: ['./thought.component.css']
})
export class ThoughtComponent implements OnInit {

  @Input() thought: Thought = {
    id: 0,
    content: "I love Angular",
    author: "Fernando",
    model: 'modelo2',
    favorite: false
  }

  constructor() { }

  ngOnInit(): void {
  }

  controlThoughtCardWidth(): string {
    if(this.thought.content.length >= 256) {
      return 'pensamento-g'
    }
    return 'pensamento-p'
  }

}
