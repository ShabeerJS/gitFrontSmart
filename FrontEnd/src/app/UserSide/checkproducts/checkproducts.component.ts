import { Component, OnInit } from '@angular/core';
import { BackendServicesService } from 'src/app/backend-services.service';
import { FixedProducts } from 'src/app/fixedproducts';
import { CookieService } from 'ngx-cookie-service';
import { Product } from 'src/app/product';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { OrderDetails } from 'src/orderdetails';
@Component({
  selector: 'app-checkproducts',
  templateUrl: './checkproducts.component.html',
  styleUrls: ['./checkproducts.component.css'],
})
export class CheckproductsComponent implements OnInit {
  orderdetails!: OrderDetails[];
  constructor(
    private backendServicesService: BackendServicesService,
    private cookie: CookieService,
    private router: Router
  ) {
    this.rationCardNo = this.cookie.get('UserCardNo');

    this.backendServicesService
      .myorderDetails(this.rationCardNo)
      .subscribe((data) => {
        console.log(data);
        this.orderdetails = data;
      });
  }
  totalnumber: number = 0;
  rationCardNo!: any;
  fixedProducts!: FixedProducts[];
  product!: Product[];
  cartProductList: FixedProducts[] = [];
  productToAddInCart!: FixedProducts;
  message!: string;
  toggle = true;
  //  category!:ProductCategory;

  ngOnInit(): void {
    //
    // for (let orderdetail of this.orderdetails) {
    //  console.log("local"+ orderdetail.localDate.getMonth());
    // }
    // console.log(this.product)
    var date = new Date();
    var curmonth = date.getMonth()+1;

  
  
    console.log(curmonth);
    this.readAllFixedProducts();
    console.log(this.readAllFixedProducts());
    console.log(this.fixedProducts);
    // console.log(this.productToAddInCart);
    console.log(this.cartProductList);
    this.readAllProducts();
  }

  readAllProducts() {
    this.backendServicesService
      .getProductList()
      .subscribe((data) => (this.product = data));
      
  }

  readAllFixedProducts() {
    this.rationCardNo = this.cookie.get('UserCardNo');
    this.backendServicesService
      .getAllfixedproductsUser(this.rationCardNo)
      .subscribe((data) => (this.fixedProducts = data));
  }

  alreadyPurchased(fixedProduct: FixedProducts) {
    if (this.orderdetails == null) {
      return true;
    }
    for (let orderdetail of this.orderdetails) {

      var date = new Date();
      var curmonth = date.getMonth()+1;
      var curyear=date.getFullYear();
      console.log(curyear)
      var dt = new Date(orderdetail.localDate);
      var orderMonth=dt.getMonth()+1;
      var orderYear=dt.getFullYear();
      console.log(orderYear)
      // console.log("local"+ orderdetail.localDate.getMonth());
      console.log("console"+orderMonth);

      for (let fixed of orderdetail.fixedProduct) {
     if(curmonth==orderMonth&&curyear==orderYear){
        if (fixedProduct.productName ==fixed.productName) {
          Swal.fire({
            title: 'You have already purchased in this month',
            text: 'You can purchase this products from next month',
            icon: "warning",
          })
          return false;
        }
      }
      }
    }
    return true;
  }

  click1!: boolean;

  onMenu() {
    this.click1 = !this.click1;
  }

  logOut() {
    this.cookie.delete('UserCardNo');
    this.router.navigate(['/LoginComponent']);
  }
  profile() {
    this.router.navigate(['/MyprofileComponent']);
  }

  addToCart(fixedProducts: FixedProducts) {
    if (this.alreadyPurchased(fixedProducts)) {
      for (let products of this.product) {
        // console.log(products.productName)
        // book.bookName.toLocaleLowerCase().includes(searchName.toLocaleLowerCase()) ||
        if (fixedProducts.productName.toLocaleLowerCase()==( products.productName.toLocaleLowerCase()) ){
          if (fixedProducts.productQuantity <= products.quantity) { 

            //   10  less than or 100
            // if (products.quantity == 0) {
            //   Swal.fire({
            //     icon: 'error',
            //     title: 'Oops...',
            //     text: 'Product out of stock!',
            //   });
            // } 
            
            
             console.log(products.productName)
            
              if (this.cartProductList.includes(fixedProducts)) {
                let index = this.cartProductList.indexOf(fixedProducts);
                this.cartProductList.splice(index, 1);
                this.totalnumber--;
              } else {
                this.message = '';
                this.productToAddInCart = fixedProducts;
                this.totalnumber++;
                //this.toggle = !this.toggle;
                // this.productToAddInCart.quantity=1;

                this.cartProductList.push(this.productToAddInCart);

                this.backendServicesService.setCartItems(this.cartProductList);
              }
            
          } else {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Product out of stock!',
            });
           
          }
          
        }
      }
    }
  }
}
