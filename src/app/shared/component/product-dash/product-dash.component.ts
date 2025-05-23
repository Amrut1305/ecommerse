import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EcomService } from '../../services/ecom.service';
import { Iproduct } from '../../model/product';

@Component({
  selector: 'app-product-dash',
  templateUrl: './product-dash.component.html',
  styleUrls: ['./product-dash.component.scss']
})
export class ProductDashComponent implements OnInit {
  categoryData !: Array<Iproduct>
  constructor(
    private _rout : ActivatedRoute,
    private _ecom : EcomService
  ) { }

  ngOnInit(): void {
    this.getQueryParams()
  }

  getQueryParams() {
  this._rout.queryParamMap.subscribe(res => {
    let category = res.get('categories');
    console.log('categories:', category);
    this._ecom.getCatData(category).subscribe(res=>{
      this.categoryData = res
      console.log(this.categoryData);
      
      
    })
  });
}

}
