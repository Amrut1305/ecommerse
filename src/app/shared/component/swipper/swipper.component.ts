import { Component, Input, OnInit } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { Iproduct } from '../../model/product';
import { EcomService } from '../../services/ecom.service';

@Component({
  selector: 'app-swipper',
  templateUrl: './swipper.component.html',
  styleUrls: ['./swipper.component.scss']
})
export class SwipperComponent implements OnInit {
getPaginationData !: Array<Iproduct>

customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
  constructor(
    private _ecom : EcomService
  ) { }

  ngOnInit(): void {
    this.paginationData()
  }

  paginationData(){
    this._ecom.getPagiData$.subscribe(res=>{
    this.getPaginationData = res
    })
  }

}
