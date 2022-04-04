import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MenubarModule,
    InputTextModule,
    ButtonModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
