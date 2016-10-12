import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from "@angular/http";
import { Cart } from '../../providers/cart/cart';
import { MyCartPage } from '../my-cart/my-cart';
import 'rxjs/Rx';

@Component({
  templateUrl: 'build/pages/product-list/product-list.html',
})
export class ProductListPage implements OnInit{
  products: Array<any>;

  constructor(private navCtrl: NavController,
  			  private http: Http,
  			  private cart: Cart) {

  }

  ngOnInit():any {
  	this.http.get('http://ionic2-pagseguro.dev/api/products')
  		.toPromise().then(response => this.products = response.json());
  }

  addItem(item){
  	this.cart.addItem(item);
  	//this.navCtrl.push(MyCartPage);
  	this.navCtrl.setRoot(MyCartPage);
  }

}
