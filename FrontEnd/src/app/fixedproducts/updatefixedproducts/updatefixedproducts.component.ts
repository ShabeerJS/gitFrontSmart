import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BackendServicesService } from 'src/app/backend-services.service';
import { OnInit } from '@angular/core';
import { Product } from 'src/app/product';

@Component({
  selector: 'app-updatefixedproducts',
  templateUrl: './updatefixedproducts.component.html',
  styleUrls: ['./updatefixedproducts.component.css']
})
export class UpdatefixedproductsComponent {

  productId!: number;
  fixedproduct!:any;
  ready:boolean=false
  submitted = false;
  constructor(private router: Router, private backendServicesService: BackendServicesService,
     private route: ActivatedRoute,private fb: FormBuilder
    ) { }

    OnlyNumbersAllowed(event: { which: any; keyCode: any; }):boolean {
      const charCode=(event.which)?event.which:event.keyCode;
      if(charCode>31&&(charCode<48||charCode>57)){
        console.log('charCode is restricted is'+charCode);
        return false;
      }
       return true;
    }
  

  // editProductForm: FormGroup = this.fb.group({
  //   productName: [, [Validators.required]],
  //   productQuantity: [, [Validators.required]],
  //   productPrice: [, [Validators.required, ]],
  // }
    
  ngOnInit(): void {
    this.productId = this.route.snapshot.params['productId'];
 this.getProductById();
   
}
  
  
  editProductForm!: FormGroup;
    getProductById() {
      this.backendServicesService.getFixedProductById(this.productId).subscribe((data) => {
        console.log(data);
        this.editProductForm = this.fb.group({
          productName: [data.productName, [Validators.required]],
          productQuantity: [data.productQuantity, [Validators.required]],
          productPrice: [data.productPrice, [Validators.required]],
          cardType: [data.cardType,[]],
      
        });
        this.ready=true;
      });
    }
  
    onSubmit(productId: number) {
      this.backendServicesService.updateFixedProduct(productId,this.editProductForm.value).subscribe(data=>{
      //  data=this.product;
      this.fixedproduct=data;
      alert("Updated product Successfully");
      this.router.navigate(['/AllfixedproductsComponent']);
      });
      
    }
  
    gotoList() {
      this.router.navigate(['/AllfixedproductsComponent']);
    }
  
    back(){
      this.router.navigate(['/teacher'])
      }
  }



