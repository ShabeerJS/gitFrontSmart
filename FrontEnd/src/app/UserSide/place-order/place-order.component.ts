import { Component, ErrorHandler } from '@angular/core';
import { BackendServicesService } from 'src/app/backend-services.service';
import { FixedProducts } from 'src/app/fixedproducts';
import { CookieService } from 'ngx-cookie-service';
import Swal from 'sweetalert2';
import { error } from 'jquery';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';
import { OrderDetails } from 'src/orderdetails';


@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.css']
})
export class PlaceOrderComponent {
  errorMessage!:string;

  cartItems!:FixedProducts[];
  total!:number;
  orderdetails!: OrderDetails[];
  // userId:number=1;
  rationCardNo!:any;
  constructor(private backendServicesService:BackendServicesService, private cookie:CookieService,private router:Router){
   

    {
      this.rationCardNo = this.cookie.get('UserCardNo');
  
      this.backendServicesService
        .myorderDetails(this.rationCardNo)
        .subscribe((data) => {
          console.log(data);
          this.orderdetails = data;
        });
    }
  }

  validation(products:FixedProducts[]){
    var date=new Date();
    var month=date.getMonth()+1;
    var year=date.getFullYear();
    for(let product of products){
      for(let order of this.orderdetails ){
        var orderDate= new Date(order.localDate);
        var orderMonth=orderDate.getMonth()+1;
        var orderYear=orderDate.getFullYear();
        if(month==orderMonth&&orderYear==year){

          for(let pro of order.fixedProduct){
            if(pro.productName.toLocaleLowerCase()==product.productName.toLocaleLowerCase()){
              console.log(pro.productName.toLocaleLowerCase())
              console.log(product.productName.toLocaleLowerCase())
              return false;
            }
          }
        }
      }
    }
    return true;
  }
  ngOnInit(): void {
    this.cartItems = this.backendServicesService.getCartItems();
    this.totalBill();
    
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



  totalBill(){
    var sum = 0;
    for(let items of this.cartItems){
      sum+=(items.productPrice*items.productQuantity);
    }
    this.total = sum;
   
  }

  removeItem(item:FixedProducts){
    this.total -=item.productPrice*item.productQuantity;
    var index: number = this.cartItems.indexOf(item, 0);
    console.log(index);

    this.cartItems.splice(index,1);
    this.totalBill()
   
  }

  flushCart(){
    this.cartItems=new Array();
    this.total=0;
   
  }
   
  checkOutItem(){
   
    this.rationCardNo =  this.cookie.get('UserCardNo');
    if (this.cartItems == null|| this.cartItems.length<=0) {
      Swal.fire({
           
        icon: 'warning',
        title: 'No  products found',
        showConfirmButton: false,
        timer: 1500
      })
    }else if(!this.validation(this.cartItems)){
      Swal.fire({
           
        icon: 'warning',
        title: 'You have  already purchased',
        showConfirmButton: true,
        // timer: 1500
        
      })
      this.router.navigate(['/MyorderDetailsComponent']);
    }
    else{
    if( (confirm("Are you sure you want to place the order")))
    this.backendServicesService.placeOrder(this.rationCardNo,this.cartItems).subscribe(data => {
      
      console.log(data);
      // alert("Your Order placed Successfully")

       
      Swal.fire({
  title: "Your Order Placed Successfully!",
  // text: "You clicked the button!",
  icon: "success",
  
});
//  location.reload();
this.flushCart();  
this.router.navigate(['/MyorderDetailsComponent']);

    },(error=>{
      if(error?.status ==400 ){
     
    Swal.fire({
      title: 'You have already purchased in this month',
      text: 'You can purchase your products from next month',
      icon: "warning",
    })
     
  
    }
    else if(error?.status ==404){
      Swal.fire({
        title: 'You have already purchased in this month',
        text: 'You can purchase your products from next month',
        icon: "warning",
      })
  }
  else if(error){
    Swal.fire({
      title: 'You have already purchased in this month',
      text: 'You can purchase your products from next month',
      icon: "warning",
    })
}}))
  }
  }
}


