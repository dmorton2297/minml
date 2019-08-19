import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MinNavBarComponent } from './min-nav-bar/min-nav-bar.component';
import { HomeComponent } from './home/home.component';
import { MinBoxComponent } from './min-box/min-box.component';
import { MinFormComponent } from './min-form/min-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MinButtonComponent } from './min-button/min-button.component';



const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
];

/**
 * @ignore
 */
@NgModule({
  declarations: [
    AppComponent,
    MinNavBarComponent,
    HomeComponent,
    MinBoxComponent,
    MinFormComponent,
    MinButtonComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
