import { Component, OnInit } from '@angular/core';
import { OrderManagerService } from '../../shared/services/order-manager.service';

@Component({
  selector: 'app-showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.css']
})
export class ShowcaseComponent implements OnInit {

  imagePath: string;

  
  /*
  default variale initialization
  */
  constructor(private orderManager: OrderManagerService) { }

  

  /*
  put initial values
  */
  ngOnInit() {
    this.imagePath = "https://www.packtpub.com/sites/default/files/bookretailers/9781786464743.jpg";
  }

  
  /*
  decrement the total order of books
  */
  throwAwayBooks(){
  	this.orderManager.removeOrder();
  }

  
  /*
  increment the total order of books
  */
  addMoreBooks(){
  	this.orderManager.addNewOrder();
  }

}
