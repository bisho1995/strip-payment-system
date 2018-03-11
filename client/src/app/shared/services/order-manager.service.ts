import { Injectable } from '@angular/core';

@Injectable()
export class OrderManagerService {

  private orders: number;

  /*
  constructor sets the default initial values of variables
  */
  constructor() {
  	this.orders = parseInt(localStorage.getItem('orders'));
  	console.log('order manager instantiated');
  }

  
  /*
  Gets the total orders of the user from local storage
  */
  getTotalOrders(){
  	if(parseInt(localStorage.getItem('orders')))
  		return parseInt(localStorage.getItem('orders'));
  	else
  		return 0;
  }

  
  /*
  set the total orders in localstorage to 0
  */
  resetOrder(){
  	localStorage.setItem('orders', "0");
  }

  
  /*
  increment the order count in local storage
  */
  addNewOrder(){
  	localStorage.setItem('orders',this.getTotalOrders() + 1 +"");
  }

  
  /*
  decrement the order count in local storage
  */
  removeOrder(){
  	if( this.getTotalOrders() > 0 ){
  		localStorage.setItem('orders',(this.getTotalOrders() - 1) +"");
  	}
  }

}
