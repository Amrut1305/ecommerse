import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/component/home/home.component';
import { AboutComponent } from './shared/component/about/about.component';
import { ContactComponent } from './shared/component/contact/contact.component';
import { SigninComponent } from './shared/component/signin/signin.component';
import { AuthGuard } from './shared/services/auth.guard';
import { UserRoleGuard } from './shared/services/user-role.guard';
import { ProductDashComponent } from './shared/component/product-dash/product-dash.component';

const routes: Routes = [
  {
    path : "home",
    component : HomeComponent,
    canActivate : [AuthGuard, UserRoleGuard],
    data : {
      userRole : ['buyer','admin','superAdmin']
    }
  },
  {
    path : "products",
    component : ProductDashComponent,
    canActivate : [AuthGuard, UserRoleGuard],
    data : {
      userRole : ['buyer','admin','superAdmin']
    }
  },
  {
    path : "about",
    component : AboutComponent,
    canActivate : [AuthGuard, UserRoleGuard],
    data : {
      userRole : ['buyer','admin','superAdmin']
    }
  },
  {
    path : "contact",
    component : ContactComponent,
    canActivate : [AuthGuard, UserRoleGuard],
    data : {
      userRole : ['buyer','admin','superAdmin']
    }
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
