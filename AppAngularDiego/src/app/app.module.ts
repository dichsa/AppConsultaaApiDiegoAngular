import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponentComponent } from './components/user-list-component/user-list-component.component';
import { NewUserComponentComponent } from './components/new-user-component/new-user-component.component';
import { UserDetailComponentComponent } from './components/user-detail-component/user-detail-component.component';
import { UpdateUserComponentComponent } from './components/update-user-component/update-user-component.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { NotificacionesComponent } from './components/notificaciones/notificaciones.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponentComponent,
    NewUserComponentComponent,
    UserDetailComponentComponent,
    UpdateUserComponentComponent,
    UserCardComponent,
    NotificacionesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
