import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ComponentComponent } from './component/component.component';
import { SecondoComponeneteComponent } from './secondo-componenete/secondo-componenete.component';
import { TerzoComponenteComponent } from './terzo-componente/terzo-componente.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentComponent,
    SecondoComponeneteComponent,
    TerzoComponenteComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
