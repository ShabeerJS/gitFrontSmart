import { Component } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BackendServicesService } from 'src/app/backend-services.service';
import { OnInit } from '@angular/core';
import { OrderDetails, OrderStatus } from 'src/orderdetails';
import { data, get } from 'jquery';


@Component({
  selector: 'app-updateorderdetails',
  templateUrl: './updateorderdetails.component.html',
  styleUrls: ['./updateorderdetails.component.css']
})
export class UpdateorderdetailsComponent implements OnInit {

orderId!:number;
OrderForm!: FormGroup;
orderStatus!: OrderStatus;

Order =new OrderDetails();

constructor(private backendServicesService : BackendServicesService,private fb: FormBuilder, private router: Router,
  private route: ActivatedRoute,){

    this.OrderForm = this.fb.group({
      orderStatus : [],
     
     });

}
ngOnInit(): void {
  this.orderId = this.route.snapshot.params['orderId'];

 

}
updateWallet(){
    this.orderStatus = this.form['orderStatus'].value;
    this.savePrice();
    // this.movieService.updateWallet(this.userId,)
    alert("Status updated successfully")
    this.router.navigate(['/AllorderdetailsComponent']);
   
  }

  get form(){
    return this.OrderForm.controls;
  } 
  savePrice(){
    this.backendServicesService.updateOrderstatus(this.orderId,this.orderStatus,this.Order)
      .subscribe(data => { 
        data=this.Order})
      
  }


    
 
}
  