import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { MatIconModule } from '@angular/material';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProvidersComponent } from './providers/providers.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProvidersComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,

    NgbCollapseModule.forRoot(),
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }