import { Component, OnInit } from '@angular/core';
import { OrderManagerService } from '../../shared/services/order-manager.service';
import { WindowRefService } from '../../shared/services/window-ref.service';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

declare var StripeCheckout :any;

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  
  private orders: number;
  private handler: any;
  private StripeCheckout: any;

  /*
  default initial values
  */
  constructor(
  	private orderManager: OrderManagerService,
  	private winRef: WindowRefService,
  	private http: HttpClient,
  	private router: Router,
  	) { }

  
  /*
  initial values on init
  */
  ngOnInit() {
  	this.orders = this.orderManager.getTotalOrders();
  	this.StripeCheckout = this.winRef.nativeWindow.StripeCheckout;
	  this.setHandlerForStripe();
  }

  

  /*
  The handler which will handle stripe transactions
  */
  setHandlerForStripe(){
  	this.handler = this.StripeCheckout.configure({
	  key: 'pk_test_6pRNASCoBOKtIshFeQd4XMUh',
	  image: 'https://stripe.com/img/documentation/checkout/marketplace.png',
	  locale: 'auto',
	  token: (token) => {
	  		this.http.post('http://localhost:3000/api/payment',
	  			this.setPostParams(token.id, this.orders))
	  		.subscribe((data)=>{
	  			this.processDataFromResponse(data);
	  		});
		 }
	  });
  }


  
  /*
  get data from server and decide results
  */
  private processDataFromResponse(data){
    console.log(data);
  	if(data["status"] === "success"){
		this.transactionSucceeded();
	}
	else if(data["status"] === "error"){
		console.log('error');
	}
  }

  

  /*
  tasks to do once transaction is complete
  */
  transactionSucceeded(){
  	this.orderManager.resetOrder();
  	alert('Transaction Succeeded');
  	this.router.navigateByUrl('/showcase');
  }


  /*
  returns an object of options of params
  @param1 token to send to server
  @param2 the orders to send to server
  */
  setPostParams(token, orders){
  	return {
  		'stripeToken': token,
		  'orders': orders
	};
  }


  
  /*
  fire stripe on click of the pay pay pay button
  */
  proceedWithPayment(){
  	this.handler.open({
	    name: 'Stripe.com',
	    description: 'Secure Payment',
	    zipCode: true,
	    amount: this.orders * 100
  	});
  }

}
