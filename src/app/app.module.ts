import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { UsersComponent } from './components/users/users.component';
import { CompletedComponent } from './components/completed/completed.component';
import { UncompletedComponent } from './components/uncompleted/uncompleted.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'users',
    component: UsersComponent,
  },
  {
    path: 'completed',
    component: CompletedComponent,
  },
  {
    path: 'uncompleted',
    component: UncompletedComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    CompletedComponent,
    UncompletedComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes) // Configura le tue rotte principali qui
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
