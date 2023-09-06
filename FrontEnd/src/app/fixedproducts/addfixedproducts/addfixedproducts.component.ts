import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RationAdmin } from 'rationAdmin';
import { BackendServicesService } from 'src/app/backend-services.service';
import { FixedProducts } from 'src/app/fixedproducts';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-addfixedproducts',
  templateUrl: './addfixedproducts.component.html',
  styleUrls: ['./addfixedproducts.component.css']
})
export class AddfixedproductsComponent {


  rationAdminId!:any;
  rationAdmin!:RationAdmin;
  addfixedProductForm!: FormGroup;
  fixedProduct: FixedProducts = new FixedProducts();
  submitted = false;
 
  constructor(private backendServicesService: BackendServicesService,
    private router: Router, private fb: FormBuilder,private cookie:CookieService) {

     this.addfixedProductForm= this.fb.group({
      productName: [, [Validators.required]],
      productQuantity: [, [Validators.required]],
        productPrice: [, [Validators.required, ]],
        cardType: [, [Validators.required, ]],
    });
  
     }
  
  ngOnInit(): void {
    this.addrationAdminwithcard();
    // this.newProduct;
  }
  
 
  OnlyNumbersAllowed(event: { which: any; keyCode: any; }):boolean {
    const charCode=(event.which)?event.which:event.keyCode;
    if(charCode>31&&(charCode<48||charCode>57)){
      console.log('charCode is restricted is'+charCode);
      return false;
    }
     return true;
  }

    
  //  newProduct(): void {
  //   this.submitted = false;
  //   this.product = new Product();
  // }
  save() {
    this.backendServicesService.addFixedProduct(this.rationAdminId,this.fixedProduct).subscribe((data: any) => {
      this.fixedProduct = data;
      console.log(data);
       
      alert("Product added successfully")
      this.router.navigate(['/AllfixedproductsComponent'])
    })

    // this.gotoList();
  }

  onSubmit() {
   
    this.fixedProduct = new FixedProducts();
    this.fixedProduct.productName = this.form['productName'].value;
    this.fixedProduct.productPrice = this.form['productPrice'].value;
    this.fixedProduct.productQuantity = this.form['productQuantity'].value;
    this.fixedProduct.cardType = this.form['cardType'].value;
    this.submitted = true;
   

    this.save();
  }
  get form(){
    return this.addfixedProductForm.controls
  }


  addrationAdminwithcard(){
    
       
    this.rationAdmin= this.backendServicesService.getrationAdmin();
   this.rationAdminId=this.cookie.get('rationAdminId');
   console.log(this.rationAdmin);

 }

  back(){
    this.router.navigate(['/AllfixedproductsComponent'])
    }
 
}






