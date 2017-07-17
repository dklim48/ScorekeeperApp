import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UpanddownComponent } from './upanddown/upanddown.component';
import { HomeComponent } from './home/home.component';
import { UpanddownmodalComponent } from './upanddown/upanddownmodal/upanddownmodal.component';
import { UpanddownbidmodalComponent } from './upanddown/upanddownbidmodal/upanddownbidmodal.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'upanddown', component: UpanddownComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UpanddownComponent,
    HomeComponent,
    UpanddownmodalComponent,
    UpanddownbidmodalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }