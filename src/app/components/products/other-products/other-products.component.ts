import { Component, OnInit } from '@angular/core';

import { Products } from '../../../interface/products';
import { ProductsService } from '../../../service/products.service';

@Component({
  selector: 'app-other-products',
  templateUrl: './other-products.component.html',
  styleUrls: ['./other-products.component.css']
})
export class OtherProductsComponent implements OnInit {
    productsList: Products[];
    otherProducts: any[];

    constructor(private _productsService: ProductsService) { }

    ngOnInit() {
        this._productsService.getProducts('').subscribe(
            products => {
                this.productsList = products
                this.otherProducts = this.productsList.slice(5, 9);  //Randomly selecting four products from index 5 to 9 as other products

                //Adding images to the products as images are not present in the list by default
                this.otherProducts[0].imageUrl = '../../../../assets/images/first-product.jpg';
                this.otherProducts[1].imageUrl = '../../../../assets/images/second-product.jpg';
                this.otherProducts[2].imageUrl = '../../../../assets/images/third-product.jpg';
                this.otherProducts[3].imageUrl = '../../../../assets/images/fourth-product.jpg';
            }
        )
    }
}
