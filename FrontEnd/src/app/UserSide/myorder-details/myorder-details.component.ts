import { Component } from '@angular/core';
import { BackendServicesService } from 'src/app/backend-services.service';
import { RationCard } from 'src/rationcard';
import { CookieService } from 'ngx-cookie-service';
import { OrderDetails } from 'src/orderdetails';
import { MatDialog } from '@angular/material/dialog';
import { MyOrderedproductsComponent } from '../my-orderedproducts/my-orderedproducts.component';
import { FixedProducts } from 'src/app/fixedproducts';
import { Router } from '@angular/router';
@Component({
  selector: 'app-myorder-details',
  templateUrl: './myorder-details.component.html',
  styleUrls: ['./myorder-details.component.css']
})
export class MyorderDetailsComponent {




  constructor(private backendServicesService:BackendServicesService,
    private cookie:CookieService,private dialogue:MatDialog,private router:Router){}
 
    rationCardNo!:any;
   // rationId:Number=108;
   orderdetails!:OrderDetails[];

   ngOnInit(): void {
     this.getUser();
   }


   click1!: boolean;
 
   onMenu() {
     this.click1 = !this.click1;
   }
 
 
   logOut(){
     this.cookie.delete('UserCardNo');
     this.router.navigate(['/LoginComponent']);
 
   }
 profile(){
   this.router.navigate(['/MyprofileComponent']);
 }
 


   openDialogue(fixedproducts:FixedProducts[]){
    this.dialogue.open(MyOrderedproductsComponent,{data:fixedproducts,width:'60%',height:'40%'});
   }
   getUser(){
 
     this.rationCardNo =  this.cookie.get('UserCardNo');
    
     this.backendServicesService.myorderDetails(this.rationCardNo).subscribe(data=>{
      console.log(data);
      this.orderdetails=data;
     })
 
     // this.BackendServicesService.getUserCardDetailswithrationId(this.rationId).subscribe(data=>this.rationCard = data);
 
   }





}
