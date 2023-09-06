
import { BackendServicesService } from 'src/app/backend-services.service';
import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import {  event } from 'jquery';

import { RationAdmin } from 'rationAdmin';
import { FixedProducts}  from 'src/app/fixedproducts';

@Component({
  selector: 'app-allfixedproducts',
  templateUrl: './allfixedproducts.component.html',
  styleUrls: ['./allfixedproducts.component.css']
})
export class AllfixedproductsComponent {
  rationAdmin!:RationAdmin;
  fixedProducts!: FixedProducts[];
  
  constructor(private router: Router, private backendServices: BackendServicesService ) {
  }
  
  ngOnInit(): void {
    console.log("inside product list");
    this.getFixedProducts();
  }
  
  private getFixedProducts() {
    this.backendServices.getFixedProductList().subscribe(data =>{
      this.fixedProducts = data;
    })
  }
  
  page: number=1;
  count:number = 0;
  tableSize: number =7;
  tablesizes:any = [3,6,9,12];


  onTableDataChange(event:any){
    this.page = event;
    this.getFixedProducts();
  }

  onTableSizeChange(event:any){
    this.tableSize=event.target.value;
    this.page=1;
    this.getFixedProducts() ;
  }



  fixedproductDetail(productId: number){
    this.router.navigate(['ViewfixedproductsComponent', productId]);
  }
  
  updateFixedproduct(productId:number){
    this.router.navigate(['/Updatefixedproducts/', productId]);
  }
 
  rationAdminStore!:RationAdmin;
  createFixedProduct(rationAdmin:RationAdmin){
    this.rationAdminStore=rationAdmin;
    this.backendServices.setrationAdmin(this.rationAdminStore);
    // this.products.setrationAdminId(RationAdmin);
    this.router.navigate(['AddfixedproductsComponent']);
  }





  deleteFixedProduct(productId: number){
    this.backendServices.deleteFixedProduct(productId).subscribe(data => {
      console.log(data);
      this.getFixedProducts();
    })
  }
  }

