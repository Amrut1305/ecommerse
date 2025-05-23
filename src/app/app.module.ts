import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TopBarComponent } from './shared/component/top-bar/top-bar.component';
import { NavbarComponent } from './shared/component/navbar/navbar.component';
import { MaterialModule } from './shared/material/material.module';
import { HomeComponent } from './shared/component/home/home.component';
import { AboutComponent } from './shared/component/about/about.component';
import { ContactComponent } from './shared/component/contact/contact.component';
import { SigninComponent } from './shared/component/signin/signin.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './shared/component/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { CarouselComponent } from './shared/component/carousel/carousel.component';
import { TimerComponent } from './shared/component/timer/timer.component'
import { SwiperModule } from 'swiper/angular';
import { SwipperComponent } from './shared/component/swipper/swipper.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ProductDashComponent } from './shared/component/product-dash/product-dash.component';


@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    SigninComponent,
    FooterComponent,
    CarouselComponent,
    TimerComponent,
    SwipperComponent,
    ProductDashComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    SwiperModule,
    CarouselModule,
    CarouselModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
