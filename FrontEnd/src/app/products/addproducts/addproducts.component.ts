
import { Component, } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RationAdmin } from 'rationAdmin';
import { BackendServicesService } from 'src/app/backend-services.service';
import { Product } from 'src/app/product';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-addproducts',
  templateUrl: './addproducts.component.html',
  styleUrls: ['./addproducts.component.css']
})
export class AddproductsComponent {

  rationAdminId!:any;
  rationAdmin!:RationAdmin;
  addProductForm!: FormGroup;
  product: Product = new Product();
  submitted = false;
 
  OnlyNumbersAllowed(event: { which: any; keyCode: any; }):boolean {
    const charCode=(event.which)?event.which:event.keyCode;
    if(charCode>31&&(charCode<48||charCode>57)){
      console.log('charCode is restricted is'+charCode);
      return false;
    }
     return true;
  }

  constructor(private backendServicesService: BackendServicesService,
    private router: Router, private fb: FormBuilder,private cookie:CookieService) {

     this.addProductForm= this.fb.group({
        productName: [, [Validators.required]],
        quantity: [, [Validators.required]],
        productPrice: [, [Validators.required, ]],
    });
  
     }


    

     get quantity(){
      return this.addProductForm.get('quantity');
     }
  
  ngOnInit(): void {
    this.addrationAdminwithcard();
    // this.newProduct;
  }
  
 
    
  //  newProduct(): void {
  //   this.submitted = false;
  //   this.product = new Product();
  // }
  save() {
    this.backendServicesService.addProduct(this.rationAdminId,this.product).subscribe((data: any) => {
      this.product = data;
      console.log(data);
       
      alert("Product added successfully")
      this.router.navigate(['/AllProductsComponent'])
    })

    // this.gotoList();
  }
  goback(){
    this.router.navigate(['/AllProductsComponent'])
    }
  onSubmit() {
   
    this.product = new Product();
    this.product.productName = this.form['productName'].value;
    this.product.productPrice = this.form['productPrice'].value;
    this.product.quantity = this.form['quantity'].value;
    this.submitted = true;
   

    this.save();
  }
  get form(){
    return this.addProductForm.controls
  }





  OnlyLettersAllowed(event: { which: any; keyCode: any; }):boolean {
    const charCode=(event.which)?event.which:event.keyCode;
    if((charCode<97||charCode>122)&&(charCode<65||charCode>90)){
      console.log('charCode is restricted is'+charCode);
      return false;
    }
     return true;
  }




  addrationAdminwithcard(){
    
       
          this.rationAdmin= this.backendServicesService.getrationAdmin();
         this.rationAdminId=this.cookie.get('rationAdminId');
         console.log(this.rationAdmin);
      
       }
      
    // }

  // gotoList() {
  //   this.router.navigate(['/AllProductsComponent']);
  // }

  
}






  






