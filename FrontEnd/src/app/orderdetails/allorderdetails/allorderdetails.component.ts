import { BackendServicesService } from 'src/app/backend-services.service';
import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import {  event } from 'jquery';

import { RationAdmin } from 'rationAdmin';

import { OrderDetails } from 'src/orderdetails';
import { VieworderdetailsComponent } from '../vieworderdetails/vieworderdetails.component';
import { FixedProducts } from 'src/app/fixedproducts';


@Component({
  selector: 'app-allorderdetails',
  templateUrl: './allorderdetails.component.html',
  styleUrls: ['./allorderdetails.component.css']
})
export class AllorderdetailsComponent {

  searchName!:any;
    status="PRODUCT_ORDERED";
  rationAdmin!:RationAdmin;
  OrderDetails!: OrderDetails[];
  fixedProd!:FixedProducts[];
  @ViewChild(VieworderdetailsComponent)addView!:VieworderdetailsComponent;
  constructor(private router: Router, private backendServices: BackendServicesService,private dialogref:MatDialog ) {

  }
  

  page: number=1;
  count:number = 0;
  tableSize: number =7;
  tablesizes:any = [3,6,9,12];


  onTableDataChange(event:any){
    this.page = event;
    this.getOrderList();
  }

  onTableSizeChange(event:any){
    this.tableSize=event.target.value;
    this.page=1;
    this.getOrderList() ;
  }



openDialog(fixedProd:FixedProducts[]){
 
  // this.addView.loaddata(fixedProd);
  this.dialogref.open(VieworderdetailsComponent,{ data:fixedProd, width:'60%',height:'40%'});

}

onView(fixedproducts:FixedProducts[]){
  // this.addView.loaddata(fixedproducts);
}


  ngOnInit(): void {
    console.log("inside Ordered list");
    this.getOrderList();
  }
  
  private getOrderList() {
    this.backendServices.getOrderList().subscribe(data =>{
      this.OrderDetails = data;
    })
  }
  
   OrderDetail(productId: number){
     this.router.navigate(['ViewfixedproductsComponent', productId]);
   }
  
  updateOrderdetails(orderId:number){
    this.router.navigate(['/UpdateorderdetailsComponent/', orderId]);
  }
 
 
 
  }

 
  
  
  