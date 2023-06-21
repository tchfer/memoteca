import { ThoughtService } from './../thought.service';
import { Thought } from './../thought';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
      content: ['', Validators.compose([
        Validators.required,
        Validators.pattern(/(.|\s)*\S(.|\s)*/),
      ])
    ],
      author: ['', Validators.compose([
        Validators.required,
        Validators.minLength(3),
      ])
    ],
      model: ['']
    });
  }

  public addThought(): void {
    if(this.form.valid) {
      this.thoughtService.addThought(this.form.value).subscribe(() => {
        this.router.navigate(['/list-thoughts']);
      });
    }
  }

  public cancelThoughtCreation(): void {
    this.router.navigate(['/list-thoughts']);
  }

}
