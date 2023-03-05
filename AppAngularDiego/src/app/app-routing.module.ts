import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewUserComponentComponent } from './components/new-user-component/new-user-component.component';
import { UserDetailComponentComponent } from './components/user-detail-component/user-detail-component.component';
import { UserListComponentComponent } from './components/user-list-component/user-list-component.component';

const routes: Routes = [
  { path: '', pathMatch:'full', redirectTo: 'home' },
  { path: 'home', component: UserListComponentComponent },
  { path: 'newUser', component: NewUserComponentComponent },
  { path: 'users/:id', component: UserDetailComponentComponent }, 
  { path: 'updateuser/:id', component: NewUserComponentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
