import { ListThoughtsComponent } from './components/thoughts/list-thoughts/list-thoughts.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddThoughtComponent } from './components/thoughts/add-thought/add-thought.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list-thoughts',
    pathMatch: 'full'
  },
  {
    path: 'add-thought',
    component: AddThoughtComponent
  },
  {
    path: 'list-thoughts',
    component: ListThoughtsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
