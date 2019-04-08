import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MyComponent } from './my/my.component';
import { PropBindingComponent } from './prop-binding/prop-binding.component';

import { RouterModule } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatMenuModule, MatInputModule, MatButtonModule, MatCardModule, MatFormFieldModule, MatIconModule } from '@angular/material';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NavigationComponent } from './navigation/navigation.component';
import { DetailsComponent } from './details/details.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MyComponent,
    PropBindingComponent,
    AboutusComponent,
    ContactusComponent,
    HomeComponent,
    PageNotFoundComponent,
    NavigationComponent,
    DetailsComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    // RouterModule.forRoot([
    //   {path: 'home', component: HomeComponent },
    //   {path: 'aboutus', component: AboutusComponent },
    //   {path: 'contactus', component: ContactusComponent }
    // ]),
    BrowserAnimationsModule,
    MatMenuModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
