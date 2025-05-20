import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/component/home/home.component';
import { AboutComponent } from './shared/component/about/about.component';
import { ContactComponent } from './shared/component/contact/contact.component';
import { SigninComponent } from './shared/component/signin/signin.component';

const routes: Routes = [
  {
    path : "home",
    component : HomeComponent
  },
  {
    path : "about",
    component : AboutComponent
  },
  {
    path : "contact",
    component : ContactComponent
  },
  {
    path : "signin",
    component : SigninComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
