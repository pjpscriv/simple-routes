import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { Thing1Component } from './thing1/thing1.component';
import { Thing2Component } from './thing2/thing2.component';

const routes: Routes = [
  { path: 'thing1', component: Thing1Component },
  { path: 'thing2', component: Thing2Component },
];

@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(routes) ],
  declarations: [ AppComponent, HelloComponent, Thing1Component, Thing2Component ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
