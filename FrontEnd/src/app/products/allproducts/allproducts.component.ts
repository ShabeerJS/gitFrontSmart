
import { BackendServicesService } from 'src/app/backend-services.service';
import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import {  event } from 'jquery';

import { RationAdmin } from 'rationAdmin';
import { Product } from '../../product';


@Component({
  selector: 'app-allproducts',
  templateUrl: './allproducts.component.html',
  styleUrls: ['./allproducts.component.css']
})
export class AllproductsComponent {
 
  rationAdmin!:RationAdmin;
  products!: Product[];
  rationAdminId!:any;
  constructor(private router: Router, private backendServices: BackendServicesService ) {
  }
  
  ngOnInit(): void {
    console.log("inside product list");
    this.getProducts();
  }
  
  private getProducts() {
    this.backendServices.getProductList().subscribe(data =>{
      this.products = data;
    })
  }
  
  productDetail(productId: number){
    this.router.navigate(['ViewproductComponent', productId]);
  }
  
  updateproduct(productId:number){
    this.router.navigate(['UpdateproductComponent', productId]);
  }
  
  rationAdminStore!:RationAdmin;
  createProduct(rationAdmin:RationAdmin){
  
    this.rationAdminStore=rationAdmin;
    this.backendServices.setrationAdmin(this.rationAdminStore);
    this.router.navigate(['AddproductsComponent']);
    // this.router.navigate(['AddproductsComponent',rationAdminId]);
  }
  deleteProduct(productId: number){
    this.backendServices.deleteProduct(productId).subscribe(data => {
      console.log(data);
      this.getProducts();
    })
  }
  }
  

