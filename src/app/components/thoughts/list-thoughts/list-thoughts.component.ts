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
    },
    {
      content: "Elit nulla consectetur duis ipsum est reprehenderit reprehenderit. Mollit quis dolore quis deserunt incididunt ipsum ad dolore veniam velit. Id quis consequat minim aliquip anim pariatur est anim incididunt sint culpa. Amet laborum deserunt exercitation minim dolore proident laboris. Aliquip proident ea non excepteur laborum ullamco laboris amet nulla incididunt fugiat do nostrud et.",
      author: "Child component",
      model: 'modelo1'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
