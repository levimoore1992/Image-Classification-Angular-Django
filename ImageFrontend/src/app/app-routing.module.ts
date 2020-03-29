import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ImageListComponent} from './image-list/image-list.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'image-list',
    component: ImageListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
