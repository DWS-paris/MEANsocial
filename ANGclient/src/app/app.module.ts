import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { Routing } from './routes'
import { AppComponent } from './app.component';
import { HeaderComponent } from './partials/header/header.component';
import { FooterComponent } from './partials/footer/footer.component';


@NgModule({
  declarations: [ AppComponent, HeaderComponent, FooterComponent ],
  imports: [ BrowserModule, HttpModule, Routing ],
  providers: [],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
