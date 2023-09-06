import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RationAdmin } from 'rationAdmin';
import { BackendServicesService } from 'src/app/backend-services.service';
import { RationCard } from 'src/rationcard';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-addrationcard',
  templateUrl: './addrationcard.component.html',
  styleUrls: ['./addrationcard.component.css']
})
export class AddrationcardComponent {


  
  rationAdminId!:any;
// rationCard1!:RationCard;

rationAdmin!:RationAdmin;
  addrationCardForm!: FormGroup;
  rationCard: RationCard = new RationCard();
  submitted = false;
 
  constructor(private backendServicesService: BackendServicesService,
    private router: Router, private fb: FormBuilder,private cookie:CookieService) {

     this.addrationCardForm= this.fb.group({
      rationCardNo: [, [Validators.required,Validators.pattern("[0-9]{10}")]],
      password: [, [Validators.required,Validators.minLength(8)]],
      type: [, [Validators.required, ]],
    });
  
     }
  
  ngOnInit(): void {
   this.addrationAdminwithcard();
    // this.newProduct;
   
  }
  
  rationCardStore!:RationCard;

  // createRAationCardMember1(rationCards:RationCard){
  //   this.rationCardStore=rationCards;
  //  this.backendServicesService.setrationCardmemberstore(this.rationCardStore);
  //   console.log(this.rationCardStore);
  
  // }
    
  //  newProduct(): void {
  //   this.submitted = false;
  //   this.product = new Product();
  // }
  save() {
    this.backendServicesService.addRationCard(this.rationAdminId,this.rationCard).subscribe((data: any) => {
      this.rationCard = data;
      console.log(data);
      this.router.navigate(['Addrationcardmember1Component/'+Number(this.rationCard.rationId)]);
      // alert("RationCard Created Successfully")
     
    },error=>{
      if(error?.status ==500){
        alert("RationCard No already Exist")
      }
    });
    

    // this.gotoList();
  }
  goback(){
    this.router.navigate(['/AllrationcardComponent'])
    }
  onSubmit() {
   
    this.rationCard = new RationCard();
    this.rationCard.rationCardNo = this.form['rationCardNo'].value;
    this.rationCard.password = this.form['password'].value;
    this.rationCard.type = this.form['type'].value;
    this.submitted = true;
   
    // this.createRAationCardMember1(this.rationCard);
    this.save();
  }

  OnlyNumbersAllowed(event: { which: any; keyCode: any; }):boolean {
    const charCode=(event.which)?event.which:event.keyCode;
    if(charCode>31&&(charCode<48||charCode>57)){
      console.log('charCode is restricted is'+charCode);
      return false;
    }
     return true;
  }

  get form(){
    return this.addrationCardForm.controls
  }

 
  addrationAdminwithcard(){
    
       
     this.rationAdmin= this.backendServicesService.getrationAdmin();
    this.rationAdminId=this.cookie.get('rationAdminId');
    console.log(this.rationAdmin);
  
  }
  
}



