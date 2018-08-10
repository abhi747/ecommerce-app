import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../service/products.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    constructor(private _productsService: ProductsService) { }

  ngOnInit() {
  }

    filterProducts(searchKey){
        this._productsService.filterProducts(searchKey);
    }

}
