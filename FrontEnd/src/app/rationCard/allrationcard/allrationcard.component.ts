
import { BackendServicesService } from 'src/app/backend-services.service';
import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import {  event } from 'jquery';

import { RationAdmin } from 'rationAdmin';
import { RationCard } from 'src/rationcard';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-allrationcard',
  templateUrl: './allrationcard.component.html',
  styleUrls: ['./allrationcard.component.css']
})
export class AllrationcardComponent {
  rationAdmin!:RationAdmin;
  rationCard!: RationCard[];
  rationAdminId!:any;
  constructor(private router: Router, private backendServices: BackendServicesService,private cookie:CookieService ) {
  }
  
  ngOnInit(): void {
    
    this.getRationCard();
  }
  

  page: number=1;
  count:number = 0;
  tableSize: number =7;
  tablesizes:any = [3,6,9,12];


  onTableDataChange(event:any){
    this.page = event;
    this.getRationCard();
  }

  onTableSizeChange(event:any){
    this.tableSize=event.target.value;
    this.page=1;
    this.getRationCard() ;
  }




  private getRationCard() {
    
    this.backendServices.getRationCardList().subscribe(data =>{
      this.rationCard = data;
    })
  }
  
  rationCardDetail(rationCardNo: number){
    this.router.navigate(['ViewrationcardComponent', rationCardNo]);
  }
  
  // updateRationCard(rationCardNo:Number){
  //   this.router.navigate(['/Updatefixedproducts/', rationCardNo]);
  // }
 rationAdminStore!:RationAdmin;
  createRationCard(rationAdmin:RationAdmin){
    // this.products.setrationAdminId(RationAdmin);
    this.rationAdminStore=rationAdmin;
    this.backendServices.setrationAdmin(this.rationAdminStore);
    
    this.router.navigate(['AddrationcardComponent']);
  }


  
 rationCardStore!:RationCard;
createAddress(rationCards:RationCard){
  this.rationCardStore=rationCards;
  this.backendServices.setrationCardmemberstore(this.rationCardStore);
  
  this.router.navigate(['AddaddressComponent'])
}

//new==========
createRAationCardMember1(rationCards:RationCard){
  this.rationCardStore=rationCards;
 this.backendServices.setrationCardmemberstore(this.rationCardStore);
 // console.log(this.rationCardStore);
 this.router.navigate(['Addrationcardmember1Component']);
}


  createRAationCardMember(rationCards:RationCard){
     this.rationCardStore=rationCards;
    this.backendServices.setrationCardmemberstore(this.rationCardStore);
    // console.log(this.rationCardStore);
    this.router.navigate(['AddrationcardmemberComponent']);
  }

  deleteRationCard(rationCardNo: number){
    this.backendServices.deleteRationCard(rationCardNo).subscribe(data => {
      console.log(data);
      // this.getRationCard();
    })
  }
  }


