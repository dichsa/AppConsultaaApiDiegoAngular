import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailComponentComponent } from './components/user-detail-component/user-detail-component.component';

const routes: Routes = [
  { path: '', component: UserDetailComponentComponent},
  { path: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
