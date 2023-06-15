import { ThoughtService } from './../thought.service';
import { Thought } from './../thought';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-thought',
  templateUrl: './add-thought.component.html',
  styleUrls: ['./add-thought.component.css']
})
export class AddThoughtComponent implements OnInit {

  thought: Thought = {
    content: '',
    author: '',
    model: 'modelo2'
  }

  constructor(
      private thoughtService: ThoughtService,
      private router: Router
    ) { }

  ngOnInit(): void {
  }

  public addThought(): void {
    this.thoughtService.addThought(this.thought).subscribe(() => {
      this.router.navigate(['/list-thoughts']);
    });
  }

  public cancelThoughtCreation(): void {
    this.router.navigate(['/list-thoughts']);
  }

}
