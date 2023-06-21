import { ListThoughtsComponent } from './components/thoughts/list-thoughts/list-thoughts.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddThoughtComponent } from './components/thoughts/add-thought/add-thought.component';
import { DeleteThoughtComponent } from './components/thoughts/delete-thought/delete-thought.component';

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
  {
    path: 'thoughts/delete-thought/:id',
    component: DeleteThoughtComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
