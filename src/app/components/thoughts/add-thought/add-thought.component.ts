import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-thought',
  templateUrl: './add-thought.component.html',
  styleUrls: ['./add-thought.component.css']
})
export class AddThoughtComponent implements OnInit {

  thought = {
    id: '1',
    content: 'Aprendendo Angular',
    author: 'Dev',
    model: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

}
