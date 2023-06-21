import { ThoughtService } from './../thought.service';
import { Thought } from './../thought';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-thought',
  templateUrl: './add-thought.component.html',
  styleUrls: ['./add-thought.component.css']
})
export class AddThoughtComponent implements OnInit {

  form!: FormGroup;

  constructor(
      private thoughtService: ThoughtService,
      private router: Router,
      private formBuilder: FormBuilder
    ) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.form = this.formBuilder.group({
      content: ['Reactive Form'],
      author: ['Angular'],
      model: ['modelo1']
    });
  }

  public addThought(): void {
    this.thoughtService.addThought(this.form.value).subscribe(() => {
      this.router.navigate(['/list-thoughts']);
    });
  }

  public cancelThoughtCreation(): void {
    this.router.navigate(['/list-thoughts']);
  }

}
