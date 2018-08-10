import { Component, OnInit } from '@angular/core';

import { Products } from '../../../interface/products';
import { ProductsService } from '../../../service/products.service';

@Component({
  selector: 'app-top-products',
  templateUrl: './top-products.component.html',
  styleUrls: ['./top-products.component.css']
})
export class TopProductsComponent implements OnInit {

    productsList: Products[];
    topProducts: any[];
    filteredTopProducts: any[];

  constructor(private _productsService: ProductsService) { }

  ngOnInit() {
      this._productsService.getProducts('').subscribe(
          products => {
              this.productsList = products
              this.topProducts = this.productsList.slice(0, 4); ////Randomly selecting four products from index 0 to 4 as top products

              //Adding images to the products as images are not present in the list by default
              this.topProducts[0].imageUrl = '../../../../assets/images/top-product-1.jpg';
              this.topProducts[1].imageUrl = '../../../../assets/images/top-product-2.jpg';
              this.topProducts[2].imageUrl = '../../../../assets/images/top-product-3.jpg';
              this.topProducts[3].imageUrl = '../../../../assets/images/top-product-4.jpg';
              this.filteredTopProducts = this.topProducts;
          }
      )

      //Logic for filtering the top products
      this._productsService.changeProducts.subscribe((data) => {
          if(data.product){
              this.filteredTopProducts = this.topProducts.filter((product) => {
                  return product.product_name.toLowerCase().indexOf(data.product.toLowerCase()) > -1;
              })
          }
          else{
              this.filteredTopProducts = this.topProducts;
          }


      }

    )
  }

}
