import { Injectable, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Products } from '../interface/products'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

    private products_url = "http://180.149.241.208:3000/api/products";
    @Output() changeProducts = new EventEmitter();

    constructor(private _http: HttpClient) { }

    getProducts(filterParameter){
        return this._http.get<Products[]>(this.products_url);
    }

    filterProducts(p: string) {
        this.changeProducts.emit({ product: p });
    }
}
