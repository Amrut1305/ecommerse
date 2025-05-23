import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  @ViewChild('carousel') carousel!: ElementRef;

  customOptions: OwlOptions = {
    loop: true,
    nav: true,
    dots: true,
    navText: ['‹', '›'],
    // items : 4,
    responsive: {
      0: {
        items: 1,
        dots:true
      },
    },
  };

  // slides = [
  //   {
  //     brandLogo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg',
  //     subtitle: 'iPhone 14 Series',
  //     title: 'Up to 10% off<br>Voucher',
  //     image:
  //       'https://www.apple.com/newsroom/images/product/iphone/standard/Apple_iPhone-14-Pro_Purple_09132022_inline.jpg.large.jpg',
  //   },
  //   {
  //     brandLogo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg',
  //     subtitle: 'iPhone 14 Plus',
  //     title: 'Limited Time<br>Free Delivery',
  //     image:
  //       'https://www.apple.com/newsroom/images/product/iphone/standard/Apple_iPhone-14-Pro_Purple_09132022_inline.jpg.large.jpg',
  //   },
  //   {
  //     brandLogo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg',
  //     subtitle: 'Accessories',
  //     title: 'Buy 1 Get 1<br>Offer',
  //     image:
  //       'https://www.apple.com/newsroom/images/product/iphone/standard/Apple_iPhone-14-Pro_Purple_09132022_inline.jpg.large.jpg',
  //   },
  // ];
  constructor() { }

  ngOnInit(): void {
  }

}
