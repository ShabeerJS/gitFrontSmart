import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BackendServicesService } from 'src/app/backend-services.service';
import { Address } from 'src/app/address';
import { RationCard } from 'src/rationcard';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-addaddress',
  templateUrl: './addaddress.component.html',
  styleUrls: ['./addaddress.component.css']
})
export class AddaddressComponent {

  rationId!:number;
  rationCard!:RationCard;



  addAddressForm!: FormGroup;
  address: Address = new Address();
  submitted = false;
 
  constructor(private backendServicesService: BackendServicesService,
    private router: Router,private route :ActivatedRoute, private fb: FormBuilder) {

     this.addAddressForm= this.fb.group({
      addressLine1: [, [Validators.required]],
      area: [, [Validators.required]],
      city: [, [Validators.required, ]],
      pincode:[, [Validators.required,Validators.pattern("[0-9]{6}") ]],
    });
  
     }
  
  ngOnInit(): void {
    // this.newProduct;
    this.rationId=this.route.snapshot.params['rationId'];
    // this.addrationmemberswithcard();
  }
  
 
    
  //  newProduct(): void {
  //   this.submitted = false;
  //   this.product = new Product();
  // }
  save() {
    this.backendServicesService.addAddress(this.rationId,this.address).subscribe((data: any) => {
      this.address = data;
      console.log(data);
       
      // alert("Ration card Created Successfully")
      Swal.fire({
        title: "Ration card created successfully",
        // text: "You clicked the button!",
        icon: "success",
        showCloseButton:true
      });
      
    })
    this.router.navigate(['/AllrationcardComponent']);
    // this.gotoList();
  }
  goback(){
    this.router.navigate(['/AllrationcardComponent'])
    }
  onSubmit() {
   
    this.address = new Address();
    this.address.addressLine1 = this.form['addressLine1'].value;
    this.address.area = this.form['area'].value;
    this.address.city = this.form['city'].value;
    this.address.pincode = this.form['pincode'].value;
    this.submitted = true;
   

    this.save();
  }
  get form(){
    return this.addAddressForm.controls
  }

  addrationmemberswithcard(){
    this.rationCard= this.backendServicesService.getrationCardmemberstore();
    this.rationId=this.rationCard.rationId;
    console.log(this.rationCard);

  }

  // gotoList() {
  //   this.router.navigate(['/AllProductsComponent']);
  // }

  
}



//==============
// rationId!:Number;
//   rationCard!:RationCard;

//   addrationCardMemberForm!: FormGroup;
//   rationCardMember: RationCardMember = new RationCardMember();
//   submitted = false;
 
//   constructor(private backendServicesService: BackendServicesService,
//     private router: Router, private fb: FormBuilder) {

//      this.addrationCardMemberForm= this.fb.group({
//       memberName: [, [Validators.required]],
//       age: [, [Validators.required]],
//       type: [, [Validators.required, ]],
//       relation:[, [Validators.required, ]],
//     });
  
//      }
  
//   ngOnInit(): void {
//     // this.newProduct;
//     this.addrationmemberswithcard();
//   }
 
    
//   //  newProduct(): void {
//   //   this.submitted = false;
//   //   this.product = new Product();
//   // }
//   save() {
//     this.backendServicesService.addRationCardMember(this.rationId,this.rationCardMember).subscribe((data: any) => {
//       this.rationCardMember = data;
//       console.log(data);
      
//       alert("rationCardMember Created Successfully")
//     })

//     // this.gotoList();
//   }
//   goback(){
//     this.router.navigate(['/AllrationcardComponent'])
//     }
//   onSubmit() {
   
//     this.rationCardMember = new RationCardMember();
//     this.rationCardMember.memberName = this.form['memberName'].value;
//     this.rationCardMember.age = this.form['age'].value;
//     this.rationCardMember.type = this.form['type'].value;
//     this.rationCardMember.relation = this.form['relation'].value;
//     this.submitted = true;
   

//     this.save();
//   }
//   get form(){
//     return this.addrationCardMemberForm.controls
//   }

//   // gotoList() {
//   //   this.router.navigate(['/AllProductsComponent']);
//   // }
//   addrationmemberswithcard(){
//     this.rationCard= this.backendServicesService.getrationCardmemberstore();
//     this.rationId=this.rationCard.rationId;
//     console.log(this.rationCard);

//   }
 

  


