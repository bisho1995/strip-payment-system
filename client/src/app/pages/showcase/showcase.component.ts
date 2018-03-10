import { Component, OnInit } from '@angular/core';
import { OrderManagerService } from '../../shared/services/order-manager.service';

@Component({
  selector: 'app-showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.css']
})
export class ShowcaseComponent implements OnInit {

  imagePath: string;

  constructor(private orderManager: OrderManagerService) { }

  ngOnInit() {
    this.imagePath = "https://www.packtpub.com/sites/default/files/bookretailers/9781786464743.jpg";
  }

  throwAwayBooks(){
  	this.orderManager.removeOrder();
  }

  addMoreBooks(){
  	this.orderManager.addNewOrder();
  }

}
