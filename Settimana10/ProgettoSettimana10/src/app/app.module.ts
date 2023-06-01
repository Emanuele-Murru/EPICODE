import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TodoComponent } from './components/todo/todo.component';
import { CompletedComponent } from './components/completed/completed.component';
import { NavbarComponent } from './components/navbar/navbar.component';


const routes: Route[] = [

  {
    path: '',
    component: TodoComponent,
  },

  {
    path: 'completed_tasks',
    component: CompletedComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    CompletedComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
