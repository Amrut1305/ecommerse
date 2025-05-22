import { Component, OnInit } from '@angular/core';
import { EcomService } from '../../services/ecom.service';
import { Iproduct } from '../../model/product';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
myCategories: string[] = ['Books and Toys', 'Electronics', 'Fashion', 'Gaming', 'Laptops', 'Mobiles', 'Mobile Accessories'];
allData: Iproduct[] = [];
categories: string[] = [];
uniqCat: string[] = [];




page = 1;
limit = 10;
pagiData: any;

constructor(private _ecom: EcomService) {}

ngOnInit(): void {
  this.getData(this.page, this.limit);
  this.getPageinationData()
}

getData(page: number, limit: number): void {
  this._ecom.fetchAllData(page, limit).subscribe((res: any) => {
    this.allData.push(...res.data);
    this.categories.push(...res.data.map((prod: any) => prod.category));
    const totalPages = res.pagination.totalPages;

    if (this.page < totalPages) {
      this.page++;
      this.getData(this.page, this.limit); // fix: call with updated page
    } else {
      this.uniqCat = Array.from(new Set(this.categories));
      console.log(this.uniqCat);
    }
  });
}

getPageinationData(){
  this._ecom.getPaginationData().subscribe(res=>{
  console.log(res);
  this._ecom.getPagiData$.next(res)
  })
}




}


