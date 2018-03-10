import { Injectable } from '@angular/core';

@Injectable()
export class OrderManagerService {

  private orders: number;

  constructor() {
  	this.orders = parseInt(localStorage.getItem('orders'));
  	console.log('order manager instantiated');
  }

  getTotalOrders(){
  	if(parseInt(localStorage.getItem('orders')))
  		return parseInt(localStorage.getItem('orders'));
  	else
  		return 0;
  }

  resetOrder(){
  	localStorage.setItem('orders', "0");
  }

  addNewOrder(){
  	localStorage.setItem('orders',this.getTotalOrders() + 1 +""));
  }

  removeOrder(){
  	if( this.getTotalOrders() > 0 ){
  		localStorage.setItem('orders',(this.getTotalOrders() - 1) +""));
  	}
  }

}
