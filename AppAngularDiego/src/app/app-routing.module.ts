import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewUserComponentComponent } from './components/new-user-component/new-user-component.component';
import { UserDetailComponentComponent } from './components/user-detail-component/user-detail-component.component';

const routes: Routes = [
  { path: '', component: UserDetailComponentComponent},
  { path: 'newUser', component: NewUserComponentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
